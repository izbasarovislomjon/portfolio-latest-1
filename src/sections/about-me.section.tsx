import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full Stack Developer',
				place: 'Tashkent, Uzbekistan',
				timePeriod: '2024 - Present',
				description: (
					<ul>
						<li>
							Contributed significantly to the development of main project{' '}
							<strong>Med-UZ AI</strong>, a key platform for enhancing healthcare services through
							AI-driven insights, medical articles, and diagnostic support.
						</li>
						<li>
							Designed and developed multiple interactive data visualization
							dashboards.
						</li>
						<li>Built several Android applications using React Native.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Full Stack Developer',
				place: 'COURSERA',
				timePeriod: '2024 - 2025',
				description: (
					<ul>
						<li>
							Earned a Full Stack Development certification from the COURSERA.
						</li>
						<li>
							Awarded for securing the top position in class, demonstrating
							strong skills and commitment.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of General MedicineScience (MBBS)',
				place: 'Tashkent State Medical University',
				timePeriod: '2024 - Present',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Islomjon Izbasarov, a Full Stack Developer.
					</p>
					<p>
						I've been working with <strong>React</strong> and{' '}
						<strong>Node</strong> for the past <strong>three years</strong>,
						building web applications that are fast, scalable and user-friendly.
					</p>
					<p>
						I like solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a side project or exploring something new.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
