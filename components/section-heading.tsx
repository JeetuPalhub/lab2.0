import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", align === "center" && "mx-auto max-w-3xl text-center")}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
