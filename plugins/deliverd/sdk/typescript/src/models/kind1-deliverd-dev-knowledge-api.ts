import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * fact (true here), convention (how we do it), decision (settled, with why), procedure (a how-to
 * note), glossary (what a term means here), contact (who to ask about what) or known_issue (a
 * problem and its workaround)
 */
export const Kind1DeliverdDevKnowledgeApi = {
  Fact: "fact",
  Convention: "convention",
  Decision: "decision",
  Procedure: "procedure",
  Glossary: "glossary",
  Contact: "contact",
  KnownIssue: "known_issue",
} as const;
export type Kind1DeliverdDevKnowledgeApi =
  | (typeof Kind1DeliverdDevKnowledgeApi)[keyof typeof Kind1DeliverdDevKnowledgeApi]
  | (string & {});

export const kind1DeliverdDevKnowledgeApiSchema: EnumSchema<Kind1DeliverdDevKnowledgeApi> =
  s.enumOf<Kind1DeliverdDevKnowledgeApi>(Kind1DeliverdDevKnowledgeApi);
