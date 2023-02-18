import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Mikołaj Sodzawiczny">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              GitHub: <a href="https://github.com/mikolaszko">@mikolaszko</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://www.sodzawiczny.com/">
                https://www.sodzawiczny.com/
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/mikolaj-sodzawiczny/">
                https://www.linkedin.com/in/mikolaj-sodzawiczny/
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Mikołaj Sodzawiczny, React Engineer at SoftKraft</p>
          <h3>Professional position</h3>
          <p>
            Hey, I'm Mikołaj. I'm a React Engineer at{' '}
            <a href="https://www.softkraft.co/">SoftKraft</a>, where I help
            build large scale applications for clients from all sectors of the
            economy. I love to learn and share my knowledge with others through
            writing and helping out wherever I can.
          </p>
          <h3>Tech stuff outside of working hours</h3>
          <p>
            As a big fan of everything open source, I'm a huge fan of Linux,
            TypeScript (in the process of becoming a TS wizard) and Rust. I
            sometimes will write a script or two and my go-to place is in the
            terminal. I'd like to think of myself as a tool agnostic engineer,
            but I do have a lot of experience with writing Frontend applications
            so that's probably my strongest suit. I've recently started writing
            my own Utility types library for TS which you can find on my GitHub.
          </p>
        </div>
      </div>
    </Container>
  );
}
