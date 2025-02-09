import "../../css/aboutUs.css";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import 'aos/dist/aos.css';

export default function AboutUs() {
	return (
		<div className="outer-div">
			<h1>Our Story</h1>

			<div className="mission-div">
			<h2>Mission</h2>
			<p>Nulla dignissim, quam at consequat iaculis, risus felis vestibulum augue, eget sodales sapien ante in leo. Pellentesque tincidunt pellentesque augue. Pellentesque vestibulum, elit vitae mattis luctus, ligula nisi mollis enim, non viverra nibh ex eu magna. Cras eu semper neque, non commodo libero. Nunc sit amet volutpat sem, vitae tristique tortor. Etiam volutpat ex non ipsum sodales, nec aliquet neque maximus. Donec consequat venenatis ex, a dapibus tellus efficitur ac. Aenean nec ipsum elementum, convallis lorem sed, condimentum odio. Duis ut accumsan libero. Sed purus ante, consequat id risus at, sodales dignissim sem. Curabitur gravida aliquet leo in sollicitudin. Donec scelerisque non nisl vitae scelerisque.</p>
				<p>Nulla dignissim, quam at consequat iaculis, risus felis vestibulum augue, eget sodales sapien ante in leo. Pellentesque tincidunt pellentesque augue. Pellentesque vestibulum, elit vitae mattis luctus, ligula nisi mollis enim, non viverra nibh ex eu magna. Cras eu semper neque, non commodo libero. Nunc sit amet volutpat sem, vitae tristique tortor. Etiam volutpat ex non ipsum sodales, nec aliquet neque maximus. Donec consequat venenatis ex, a dapibus tellus efficitur ac. Aenean nec ipsum elementum, convallis lorem sed, condimentum odio. Duis ut accumsan libero. Sed purus ante, consequat id risus at, sodales dignissim sem. Curabitur gravida aliquet leo in sollicitudin. Donec scelerisque non nisl vitae scelerisque.</p>

			</div>

			<div className="team-div">
			<h3>We are Honey Dip Donut, a team of four in UBC.</h3>

			<div className="section-left" data-aos="fade-left" data-aos-duration="2000">
				<div className="section-inner-div-left">
				<img className="right image" src="https://media.giphy.com/media/PgKAsMXyo0vXFp6vj0/giphy.gif"
					 alt="may-gif"/>
					<h3>May Tang </h3>
				<p className="right-description">Nulla dignissim, quam at consequat iaculis, risus felis vestibulum augue, eget sodales sapien ante in leo. Pellentesque tincidunt pellentesque augue. Pellentesque vestibulum, elit vitae mattis luctus, ligula nisi mollis enim, non viverra nibh ex eu magna. Cras eu semper neque, non commodo libero. Nunc sit amet volutpat sem, vitae tristique tortor.</p>
				<a href="#" className="icon"><FaLinkedin/></a>
				<a href="#" className="icon"><FaGithub/></a>
				<a href="#" className="icon"><FaEnvelope/></a>
				</div>
			</div>
			<div className="section-right" data-aos="fade-right" data-aos-duration="2000">
				<div className="section-inner-div-right">
				<img className="left image" src="https://media.giphy.com/media/1jXaP2LfX7eQTErugm/giphy.gif"
					 alt="ramit-gif"/>
					<h3>Ramit Kataria</h3>
				<p className="left-description">Nulla dignissim, quam at consequat iaculis, risus felis vestibulum augue, eget sodales sapien ante in leo. Pellentesque tincidunt pellentesque augue. Pellentesque vestibulum, elit vitae mattis luctus, ligula nisi mollis enim, non viverra nibh ex eu magna. Cras eu semper neque, non commodo libero. Nunc sit amet volutpat sem, vitae tristique tortor.</p>
				<a href="#" className="icon"><FaLinkedin/></a>
				<a href="#" className="icon"><FaGithub/></a>
				<a href="#" className="icon"><FaEnvelope/></a>
			</div>
			</div>

			<div className="section-left" data-aos="fade-left" data-aos-duration="2000">
				<div className="section-inner-div-left">
				<img className="right image" src="https://media.giphy.com/media/1wX7raPRBBmIjT4kmS/giphy.gif"
					 alt="sophie-gif"/>
				<h3>Sophie Chai</h3>
				<p className="right-description">Nulla dignissim, quam at consequat iaculis, risus felis vestibulum augue, eget sodales sapien ante in leo. Pellentesque tincidunt pellentesque augue. Pellentesque vestibulum, elit vitae mattis luctus, ligula nisi mollis enim, non viverra nibh ex eu magna. Cras eu semper neque, non commodo libero. Nunc sit amet volutpat sem, vitae tristique tortor.</p>
				<a href="#" className="icon"><FaLinkedin/></a>
				<a href="#" className="icon"><FaGithub/></a>
				<a href="#" className="icon"><FaEnvelope/></a>
				</div>
			</div>
			<div className="section-right" data-aos="fade-right" data-aos-duration="2000">
				<div className="section-inner-div-right">
				<img className="left image" src="https://media.giphy.com/media/l0MYIdIrGhCuFqj72/giphy.gif"
					 alt="tom-gif"/>
				<h3>Tom Mo</h3>
				<p className="left-description">Nulla dignissim, quam at consequat iaculis, risus felis vestibulum augue, eget sodales sapien ante in leo. Pellentesque tincidunt pellentesque augue. Pellentesque vestibulum, elit vitae mattis luctus, ligula nisi mollis enim, non viverra nibh ex eu magna. Cras eu semper neque, non commodo libero. Nunc sit amet volutpat sem, vitae tristique tortor.</p>
				<a href="#" className="icon"><FaLinkedin/></a>
				<a href="#" className="icon"><FaGithub/></a>
				<a href="#" className="icon"><FaEnvelope/></a>
				</div>
			</div>

			</div>
		</div>
	);
}