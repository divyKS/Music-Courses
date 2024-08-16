'user client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials: { quote: string; name: string; title: string; }[] = [
    {
        "quote": "This academy has transformed my guitar skills! The courses are easy to follow, and the instructors are incredibly knowledgeable.",
        "name": "Sarah Thompson",
        "title": "Guitar Student"
      },
      {
        "quote": "I never thought I could learn music theory so quickly. The interactive lessons made all the difference. Highly recommended!",
        "name": "James Lee",
        "title": "Music Theory Student"
      },
      {
        "quote": "The personalized feedback I received was invaluable. It helped me correct mistakes I wasn't even aware of. Excellent experience!",
        "name": "Emily Davis",
        "title": "Piano Student"
      },
      {
        "quote": "As a beginner, I was worried about learning drums online, but the structured approach and clear instructions made it a breeze.",
        "name": "Michael Johnson",
        "title": "Drumming Student"
      },
      {
        "quote": "The community aspect of this academy is fantastic. I've met so many like-minded musicians, and we've even started a band together!",
        "name": "Rachel Brown",
        "title": "Vocal Training Student"
      }
]

const TestimonialCards = () => {
    return (
        <>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.1] items-center justify-center relative overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default TestimonialCards