import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { LinkContainer } from 'react-router-bootstrap';
import Pagination from 'react-js-pagination';

import { Button, Table, ButtonGroup, Form } from 'react-bootstrap';

import http from '../../services/http';

export default function Index() {
  const [developers, setDevelopers] = useState([]);
  const [meta, setMeta] = useState({
    total: 1
  });
  const [params, setParams] = useState({
    page: 1,
    search: ''
  });

  async function loadDevelopers(params) {
    const response = await http.get('/developers', { params: params });
    setDevelopers(response.data.data);
    setMeta({
      per_page: response.data.per_page,
      total: response.data.total
    });
  }

  useEffect(() => {
    loadDevelopers(params);
  }, [params]);

  async function handleDelete(id) {
    try {
      await http.delete(`/developers/${id}`);
      loadDevelopers(params);
    } catch (error) {
    }
  }

  return (
    <>
    <div className="d-flex justify-content-between align-items-center">
      <h1>Desenvolvedores</h1>

      <LinkContainer to="/create">
        <Button>Adicionar</Button>
      </LinkContainer>
    </div>

    <div className="pt-4">
      <div className="pb-2">
        <Form.Control type="text" placeholder="Procure por nome ou hobby..." value={params.search} onChange={e => setParams({ ...params, search: e.target.value }) } />
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th width="50"></th>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Idade</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {developers.map(developer => (
            <tr key={ developer.id }>
              <td><img src={ `https://api.adorable.io/avatars/50/${developer.id}.png` } width="50" height="50" alt={ developer.name } /></td>
              <td>
                { developer.name }
                <span className="text-muted d-block text-sm">Hobby: { developer.hobby }</span>
              </td>
              <td>{ developer.gender }</td>
              <td>{ developer.age }</td>
              <td>{ moment(developer.birth_date, 'YYYY-MM-DD').format('DD/MM/YYYY') }</td>
              <td>
                <ButtonGroup size="sm">
                  <LinkContainer to={`/edit/${developer.id}`}>
                    <Button variant="primary">Editar</Button>
                  </LinkContainer>

                  <Button variant="danger" onClick={() => handleDelete(developer.id)}>Excluir</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination
        activePage={ params.page }
        itemsCountPerPage={ meta.per_page }
        totalItemsCount={ meta.total }
        pageRangeDisplayed={5}
        onChange={pageNumber => setParams({ ...params, page: pageNumber })}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
    </>
  );
}
