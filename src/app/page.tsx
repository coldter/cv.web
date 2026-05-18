import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardBulletPoints,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { MobileDownloadButton, ProjectCard } from "@/components/project-card";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary.join(" "),
  openGraph: {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary.join(" "),
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary.join(" "),
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  const structuredData = generateResumeStructuredData();
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div>
          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-pretty font-mono text-xs text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1.5 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-9 sm:size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-9 sm:size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-9 sm:size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          {RESUME_DATA.summary.map((p, i) => {
            return (
              <p
                key={i}
                className="text-pretty font-mono text-sm text-muted-foreground"
              >
                {p}
              </p>
            );
          })}
        </Section>
        <Section className="print-no-break">
          <h2 className="text-xl font-bold">AI-Driven Development</h2>
          <p className="max-w-prose text-pretty font-mono text-xs leading-relaxed text-foreground/90">
            {RESUME_DATA.aiPractice.pitch}
          </p>
          <dl className="mt-1 grid gap-x-8 gap-y-3 border-t border-foreground/25 pt-3 sm:grid-cols-2 print:border-foreground/50">
            {RESUME_DATA.aiPractice.highlights.map((item, i) => (
              <div key={item.title} className="flex gap-x-3">
                <span
                  aria-hidden
                  className="select-none pt-px font-mono text-[10px] font-medium leading-relaxed tracking-widest text-muted-foreground/60"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <dt className="font-mono text-xs font-semibold text-foreground">
                    {item.title}
                  </dt>
                  <dd className="mt-0.5 text-pretty font-mono text-xs leading-snug text-muted-foreground">
                    {item.body}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex flex-col gap-y-1 text-base sm:flex-row sm:items-center sm:justify-between sm:gap-x-2">
                    <h3 className="inline-flex flex-wrap items-center gap-x-1 gap-y-1 font-semibold leading-tight">
                      <a className="hover:underline" href={work?.link || "#"}>
                        {work.company}
                      </a>

                      <span className="inline-flex flex-wrap gap-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-xs tabular-nums text-gray-600 sm:text-sm sm:whitespace-nowrap">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm font-medium italic leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                {work.description.map((d, i) => {
                  return (
                    <CardContent className="mt-2 text-xs" key={i}>
                      {d}
                    </CardContent>
                  );
                })}
                {work?.bulletPoints?.length && (
                  <>
                    <h4 className="mt-3 font-mono text-sm font-semibold leading-none">
                      Technical highlights:
                    </h4>
                    <CardBulletPoints className="mt-2">
                      {work.bulletPoints.map((bulletPoint, i) => {
                        return (
                          <li
                            className="text-s mt-1 font-mono text-muted-foreground"
                            key={i}
                          >
                            {bulletPoint}
                          </li>
                        );
                      })}
                    </CardBulletPoints>
                  </>
                )}
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex flex-col gap-y-1 text-base sm:flex-row sm:items-center sm:justify-between sm:gap-x-2">
                    <h3 className="font-semibold leading-tight">
                      {education.school}
                    </h3>
                    <div className="text-xs tabular-nums text-gray-600 sm:text-sm sm:whitespace-nowrap">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        resumeDownloadUrl={RESUME_DATA?.resumeDownloadUrl}
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
      <MobileDownloadButton link={RESUME_DATA.resumeDownloadUrl} />
    </main>
  );
}
