// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Home.css';

function Home() {
    return (   
      <>
        <Nav>
            <Button className="loginregister" href="/register" variant="primary" type="submit">Daftar</Button>
            <Button className="loginhome" href="/login" variant="primary" type="submit">Masuk</Button>
        </Nav>

        <Card className="sytlecard">
            <Card.Body>
            <Card.Text className="textbestprovider">The Best Provider</Card.Text>
            <Card.Text className="textautoservice">Auto Service & Repair</Card.Text>
            <Button className="readmore" variant="primary" type="submit">Read More</Button>
            <Card.Text className="textpenjelasan">Lorem ipsum dolor sit amet consectetur. Laoreet sit dignissim posuere dolor praesent eu. Feugiat hendrerit id euismod felis sollicitudin. Sagittis in nam ornare duis etiam eu. Blandit sed suspendisse lectus hendrerit massa mauris volutpat elit.</Card.Text>
                <img src="images/clasic3.png" position= "absolute" width = "400px" height= "300px" alt="logo mobil clasic" class="clasichome" className="clasichome" /> 
            </Card.Body>
        </Card>
        <p className="labelmobil">Mobil</p>
        <Button href="/register" className="cardjenismobil1">
            <Card.Body>
                <img src="images/clasic3.png" position= "absolute" width = "150px" height= "130px" alt="logo mobil clasic" class="clasicmobil1" className="clasicmobil1" /> 
                <Card.Text className="mobil1">Mobil BMW 3201i</Card.Text>
                <Card.Text className="deskripsimobil1">Deskripsi</Card.Text>
                <Card.Text className="penjelasanmobil1">Lorem ipsum dolor sit amet consectetur. Enim molestie cursus venenatis nullam auctor viverra pulvinar tempor.</Card.Text>
                <Card.Text className="hargamobil1">Harga    :</Card.Text>
            </Card.Body>
        </Button>
        <Button href="/register" className="cardjenismobil2">
            <Card.Body>
                    <img src="images/mobilcivic.png" position= "absolute" width = "150px" height= "130px" alt="logo mobil civic" class="mobilcivic" className="mobilcivic" /> 
                    <Card.Text className="mobilcivic1">Mobil Civic</Card.Text>
                    <Card.Text className="deskripsimobilcivic1">Deskripsi</Card.Text>
                    <Card.Text className="penjelasanmobilcivic1">Lorem ipsum dolor sit amet consectetur. Enim molestie cursus venenatis nullam auctor viverra pulvinar tempor.</Card.Text>
                    <Card.Text className="hargamobilcivic1">Harga    :</Card.Text>
            </Card.Body>
        </Button>
        <Button href="/register" className="cardjenismobil3">
            <Card.Body>
                    <img src="images/mobilhitam.png" position= "absolute" width = "150px" height= "130px" alt="logo mobil hitam" class="mobilhitam" className="mobilhitam" /> 
                    <Card.Text className="mobilhitam1">Mobil Hitam</Card.Text>
                    <Card.Text className="deskripsimobilhitam1">Deskripsi</Card.Text>
                    <Card.Text className="penjelasanmobilhitam1">Lorem ipsum dolor sit amet consectetur. Enim molestie cursus venenatis nullam auctor viverra pulvinar tempor.</Card.Text>
                    <Card.Text className="hargamobilhitam1">Harga    :</Card.Text>
            </Card.Body>
        </Button>
        <Button href="/register" className="lainnya1">
            <Card.Body>
                    <img src="images/next1.png" position= "absolute" width = "150px" height= "130px" alt="logo selanjutnya" class="clainnya1" className="clainnya1" /> 
            </Card.Body>
        </Button>


        <p className="labelsparepart">Sparepart</p>
        <Button href="/register" className="cardjenissparepart1">
            <Card.Body>
                <img src="images/ban.png" position= "absolute" width = "150px" height= "130px" alt="logo ban" class="imgban1" className="imgban1" /> 
                <Card.Text className="ban1">Ban Standard</Card.Text>
                <Card.Text className="deskripsiban1">Deskripsi</Card.Text>
                <Card.Text className="penjelasanban1">Lorem ipsum dolor sit amet consectetur. Enim molestie cursus venenatis nullam auctor viverra pulvinar tempor.</Card.Text>
                <Card.Text className="hargaban1">Harga    :</Card.Text>
            </Card.Body>
        </Button>
        <Button href="/register" className="cardjenissparepart2">
            <Card.Body>
                    <img src="images/velg.png" position= "absolute" width = "150px" height= "130px" alt="logo velg" class="imgvelg1" className="imgvelg1" /> 
                    <Card.Text className="velg1">Mobil Civic</Card.Text>
                    <Card.Text className="deskripsivelg1">Deskripsi</Card.Text>
                    <Card.Text className="penjelasanvelg1">Lorem ipsum dolor sit amet consectetur. Enim molestie cursus venenatis nullam auctor viverra pulvinar tempor.</Card.Text>
                    <Card.Text className="hargavelg1">Harga    :</Card.Text>
            </Card.Body>
        </Button>
        <Button href="/register" className="cardjenissparepart3">
            <Card.Body>
                    <img src="images/aki.png" position= "absolute" width = "150px" height= "130px" alt="logo aki" class="imgaki" className="imgaki" /> 
                    <Card.Text className="aki1">Aki</Card.Text>
                    <Card.Text className="deskripsiaki1">Deskripsi</Card.Text>
                    <Card.Text className="penjelasanaki1">Lorem ipsum dolor sit amet consectetur. Enim molestie cursus venenatis nullam auctor viverra pulvinar tempor.</Card.Text>
                    <Card.Text className="hargaaki1">Harga    :</Card.Text>
            </Card.Body>
        </Button>
        <Button href="/register" className="lainnya2">
            <Card.Body>
                    <img src="images/next1.png" position= "absolute" width = "150px" height= "130px" alt="logo selanjutnya" class="clainnya2" className="clainnya2" /> 
            </Card.Body>
        </Button>


      </>
  );
}
 
export default Home;