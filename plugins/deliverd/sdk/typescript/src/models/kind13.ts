import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** decision for a decision, fact otherwise, when omitted */
export const Kind13 = {
  Fact: "fact",
  Convention: "convention",
  Decision: "decision",
  Procedure: "procedure",
  Glossary: "glossary",
  Contact: "contact",
  KnownIssue: "known_issue",
} as const;
export type Kind13 = (typeof Kind13)[keyof typeof Kind13] | (string & {});

export const kind13Schema: EnumSchema<Kind13> = s.enumOf<Kind13>(Kind13);
