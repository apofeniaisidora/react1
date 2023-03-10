import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Carta(props) {
    const src = props.src;
    const titulo = props.titulo;
    const descripcion = props.descripcion;

    return (
        <Card style={{width: "50%", margin: "2%"}}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
                <Button variant="success">Inscribirme</Button>
            </Card.Body>
        </Card>
    );
}

export default Carta;