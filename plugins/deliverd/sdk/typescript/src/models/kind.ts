import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** What kind of answer: text, long_text, number, date, choice, multi_choice or boolean */
export const Kind = {
  Text: "text",
  LongText: "long_text",
  Number: "number",
  Date: "date",
  Choice: "choice",
  MultiChoice: "multi_choice",
  Boolean: "boolean",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);
