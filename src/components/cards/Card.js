import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const Card = ({id, image, total, title, onClick}) =>{
    return(
      <CardBS className="bg-dark text-white">
          <CardBS.Img src={image} alt="CardBS image" />
          <CardBS.ImgOverlay>
          <Button variant="primary" onClick={() => onClick(id)}>
            Salvos <Badge bg="secondary">{total}</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
          </CardBS.ImgOverlay>
      </CardBS>
    )
}