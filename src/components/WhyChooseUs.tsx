'use client';
import Image from 'next/image';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
	{
		title: 'Comprehensive Course Selection',
		description:
			'Our academy offers a wide range of music courses, from beginner fundamentals to advanced techniques, catering to all skill levels and musical interests.',
		content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/usp/comprehensive-course-selection.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="CCS"
            />
          </div>
		),
	},
	{
		title: 'Expert Instructors',
		description:
			'Learn from industry professionals and seasoned musicians who bring years of experience and passion to their teaching, ensuring you receive top-notch guidance.',
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/usp/expert-instructors.jpeg"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="EI"
            />
          </div>
		),
	},
	{
		title: 'Flexible Learning Paths',
		description:
			'Tailor your learning journey with our flexible course structure, allowing you to progress at your own pace and focus on the areas that matter most to you.',
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/usp/flexible-learning-paths.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="FLP"
            />
          </div>
		),
	},
	{
		title: 'Interactive Learning Experience',
		description:
			'Engage with interactive lessons, quizzes, and practical exercises designed to reinforce your skills and keep you motivated throughout your musical journey.',
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/usp/interactive-learning-experience.jpeg"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="ILE"
            />
          </div>
		),
	},
    {
        title: "",
        description: "",
        content: (
          <></>
        ),
      },
    ];

const WhyChooseUs = () => {
	return (
		<>
			<div className="p-10">
				<StickyScroll content={content} />
			</div>
		</>
	);
};

export default WhyChooseUs;
