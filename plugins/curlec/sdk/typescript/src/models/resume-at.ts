import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** When to resume. Currently only 'now' is supported. */
export const ResumeAt = {
  Now: "now",
} as const;
export type ResumeAt = (typeof ResumeAt)[keyof typeof ResumeAt] | (string & {});

export const resumeAtSchema: EnumSchema<ResumeAt> = s.enumOf<ResumeAt>(ResumeAt);
