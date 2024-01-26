import Head from 'next/head';
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-blue-500 via-white to-green-500 bg-wave">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#services">
          <Image
            alt="AI for Beginners Logo"
            className="h-6 w-6"
            height="40"
            src="/icon.jpg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <span className="sr-only">AI for Beginners</span>
        </Link>
        <div className="mx-auto text-md font-semibold">
          Based in Grass Valley, CA, serving Nevada County, CA and surrounding areas
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Learn AI
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-6 md:pt-12 lg:pt-16 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  AI Can Help You
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4 mb-4">
                  Book a coaching session to learn how to work with an AI helper, for use at home and work, and
                  transform your life.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#contact"
                  >
                    Book an AI Coach Now
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  alt="AI Solutions"
                  className="rounded-full object-cover object-left"
                  height="310"
					src="/logo310x310.jpg"
					style={{
                  aspectRatio: "310/310",
                  objectFit: "cover",
					}}
                  width="310"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-6 lg:py-6" id="services">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 invisible">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Started Today: AI For Beginners</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Learn effective strategies for working with your AI buddy using natural language.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Why Learn AI?</CardTitle>
                </CardHeader>
                <CardContent>
                  Learning to communicate your needs to AI can help you get your tasks done more efficiently, freeing up
                  your time for more important things. You deserve to be able to focus your attention on creative
                  direction, problem-solving, and decision making.
                </CardContent>
                <CardFooter>
                  <Link href="#contact">
                    <Button>Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>One-on-One Coaching</CardTitle>
                </CardHeader>
                <CardContent>
                  Let an AI coach help you with your specific needs and focus you on what you need to know. In person, or
                  remotely, our experts will focus on you and only you.
                </CardContent>
                <CardFooter>
                  <Link href="#contact">
                    <Button>Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI for Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  Transform your work life with a multifaceted AI assistant. Research, data analysis, effective
                  communication, negotiation assistance, brainstorming, visual aids, and much more.
                </CardContent>
                <CardFooter>
                  <Link href="#contact">
                    <Button>Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI at Home</CardTitle>
                </CardHeader>
                <CardContent>
                  AI can help you with everything from gardening, to dating, exercise regimens, gaming, diet strategies,
                  learning languages, tutoring, and much more, tailored to you and your specific wants and needs.
                </CardContent>
                <CardFooter>
                  <Link href="#contact">
                    <Button>Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tailored Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  Want something more complex? Maybe you would like your AI to have a specific personality, or
                  automation of a task, or design it to help users on your website: We partner with an AI Guru to give
                  you a tailored AI to suit your purposes.
                </CardContent>
                <CardFooter>
                  <Link href="#contact">
                    <Button>Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Imagine More</CardTitle>
                </CardHeader>
                <CardContent>
                  Let your AI coach help you with your new concept! AI has more uses and abilities than any one person can come up with. Do you have another idea for how
                  to use it?
                </CardContent>
                <CardFooter>
                  <Link href="#contact">
                    <Button>Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
		
		<section className="w-full py-6 md:py-6 lg:py-18" id="about">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Your Coach</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Your AI Coach, Corey Holden, a master of making the esoteric world of technology easy for everyone. He studied Computer Science at Humboldt State University and has over a decade of
                experience in the IT industry. He is excited to be making the cutting edge technology that is Large
                Language Models accessible to everyone.
              </p>
            </div>
            <div className="flex justify-right items-center">
              <Image
                alt="Expert Image"
                className="rounded-full object-cover object-left"
                height="200"
                src="/Portrait.jpg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
          </div>
        </section>
		
        <section className="w-full py-6 md:py-6 lg:py-18" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Book Your AI Coach</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have any questions or want to get started? Get in touch with me. Let me know roughly when and where you would like your coaching session to happen and I will get back to you within one business day with a quote.
              </p>
            </div>
            <div className="w-full max-w-sm space-x-2 flex justify-between">
              <Card>
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent>Corey Holden, AI Coach 
					<br/><strong>AIFreeMyTime@gmail.com</strong>
					<br/>
					<br/>Phone on request, text preferred.
					<br/>
					<br/>To share with a friend, let them scan this QR code with their phone&apos;s camera:
				  <Image
                    alt="QR Code"
                    className="rounded-xl object-cover object-center mt-4"
                    height="243"
                    src="/QR.jpg"
                    style={{
                      aspectRatio: "243/243",
                      objectFit: "cover",
                    }}
                    width="243"
                  />
				</CardContent>
              </Card>
             
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
