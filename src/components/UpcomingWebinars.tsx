'use client'
import Link from "next/link"
import React from "react"
import { HoverEffect } from "./ui/card-hover-effect"

const featuredWebinars: {title: string, description: string, link: string}[] = [
    {
        "title": "Mastering Guitar Techniques",
        "description": "Join us for an in-depth webinar on advanced guitar techniques with live demonstrations and Q&A sessions.",
        "link": "https://theguitarhead.com/blogs/guitar-tips/quick-guide-to-guitar-techniques-for-beginners?srsltid=AfmBOor_NY1TncA0nrT5bCBRxMYrnmYyhyHL4jIJZqwhrDUqFg-vwUyn"
      },
      {
        "title": "Vocal Warm-Ups & Exercises",
        "description": "Learn essential vocal warm-ups and exercises to improve your singing technique and maintain vocal health.",
        "link": "https://www.schoolofrock.com/resources/vocals/9-best-vocal-warm-ups-for-singers"
      },
      {
        "title": "Music Production Tips & Tricks",
        "description": "Discover professional tips and tricks for producing high-quality music from home, using the latest tools and software.",
        "link": "https://hyperbits.com/103-music-production-tips/"
      },
      {
        "title": "Songwriting Secrets from the Pros",
        "description": "Unlock the secrets of successful songwriting with insights from industry professionals who have written chart-topping hits.",
        "link": "https://dittomusic.com/en/blog/how-to-write-a-song-10-tips-on-how-to-boost-your-creative-side-when-writing-songs#:~:text=Getting%20started%20is%20often%20the,of%20your%20song%20around%20it."
      },
      {
        "title": "Piano Techniques for Beginners",
        "description": "A beginner-friendly webinar covering essential piano techniques, from basic chords to simple melodies.",
        "link": "https://emmablairpiano.com/beginner-piano-techniques/"
      }
]

const UpcomingWebinars = () => {
    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">UPCOMING WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>

                <div className="max-w-5xl mx-auto px-8 mt-10">
                  <HoverEffect items={featuredWebinars} />
                </div>

                <div className="mt-10 text-center">
                    <Link href={"/"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars
