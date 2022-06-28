import './card.css'

export const Card = (props) => {
	const { user } = props
	return (
		<div className="card">
			<img src={user.avatar} alt="Avatar" />
			<div className="container">
				<h4>{user.name}</h4>
				<p>{user.title}</p>
				<p>Seniority level: {user.seniority}</p>
				<p>Hourly rate: {user.hourlyRate}</p>
				<p>Languages:</p>
				{/* TODO: iterate over tags to show all of them */}
				{/* TODO: each tag should have a tag class */}
				<footer>
					<button className="primary-button">Book Now</button>
					<button className="secondary-button">Full profile</button>
				</footer>
			</div>
		</div>
	)
}
