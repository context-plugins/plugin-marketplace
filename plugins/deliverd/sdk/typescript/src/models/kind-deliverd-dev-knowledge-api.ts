import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindDeliverdDevKnowledgeApi = {
  Fact: "fact",
  Convention: "convention",
  Decision: "decision",
  Procedure: "procedure",
  Glossary: "glossary",
  Contact: "contact",
  KnownIssue: "known_issue",
} as const;
export type KindDeliverdDevKnowledgeApi =
  | (typeof KindDeliverdDevKnowledgeApi)[keyof typeof KindDeliverdDevKnowledgeApi]
  | (string & {});

export const kindDeliverdDevKnowledgeApiSchema: EnumSchema<KindDeliverdDevKnowledgeApi> =
  s.enumOf<KindDeliverdDevKnowledgeApi>(KindDeliverdDevKnowledgeApi);
