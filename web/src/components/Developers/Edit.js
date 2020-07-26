import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Form, Row, Col } from 'react-bootstrap';
import http from '../../services/http';

export default function Edit({ history, match }) {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birth_date: '',
    hobby: '',
  });

  async function loadDeveloper(id) {
    const response = await http.get(`/developers/${id}`);
    setFormData(response.data);
  }

  useEffect(() => {
    loadDeveloper(match.params.id);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();

    try {
      await http.put(`/developers/${match.params.id}`, formData);
      history.push('/');
    } catch (error) {
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Desenvolvedores » Editar</h1>

        <LinkContainer to="/">
          <Button variant="light">Voltar</Button>
        </LinkContainer>
      </div>

      <div className="pt-4">
        <Row>
          <Col>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Nome</Form.Label>
                <Form.Control required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value }) } />
              </Form.Group>

              <Form.Group controlId="formGender">
                <Form.Label>Sexo</Form.Label>
                <Form.Check required type="radio" checked={formData.gender == 'F'} name="formGender" id="formGenderF" label="Feminino" onChange={e => setFormData({ ...formData, gender: 'F' }) } />
                <Form.Check required type="radio" checked={formData.gender == 'M'} name="formGender" id="formGenderM" label="Masculino" onChange={e => setFormData({ ...formData, gender: 'M' }) } />
              </Form.Group>

              <Form.Group controlId="formBirthDate">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control required type="date" value={formData.birth_date} onChange={e => setFormData({ ...formData, birth_date: e.target.value }) } />
              </Form.Group>

              <Form.Group controlId="formHobby">
                <Form.Label>Hobby</Form.Label>
                <Form.Control type="text" value={formData.hobby} onChange={e => setFormData({ ...formData, hobby: e.target.value }) } />
              </Form.Group>

              <Button variant="primary" type="submit">Salvar</Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </>
  );
}
