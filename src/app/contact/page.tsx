'use client';
import { FormEvent, useState } from 'react';
import { BackgroundBeams } from './../../components/ui/background-beams';

const ContactPage = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
        setEmail('');
        setMessage('');
    };

	return (
		<>
			<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
				<div className="max-w-6xl mx-auto p-4 flex flex-row items-center justify-center gap-8">
                    <div>
                        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold whitespace-nowrap">
                            Contact Us
                        </h1>
                        <p></p>
                        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                            We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
                        </p>
                    </div>
                    <form className='space-y-4 mt-4' onSubmit={handleOnSubmit}>
                        <input
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="text"
                            placeholder="hi@manuarora.in"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 leading-10 px-2"
                        />
                        <textarea
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            placeholder="Your message"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 resize-none"
                            rows={5}
                            required                            
                        />                        
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </form>
                    
				</div>
				{/* <BackgroundBeams /> */}
			</div>
		</>
	);
};

export default ContactPage;
