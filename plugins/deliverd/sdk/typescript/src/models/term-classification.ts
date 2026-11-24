import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** With counts: the strictest classification among the terms found */
export const TermClassification = {
  Confidential: "confidential",
  Restricted: "restricted",
} as const;
export type TermClassification = (typeof TermClassification)[keyof typeof TermClassification] | (string & {});

export const termClassificationSchema: EnumSchema<TermClassification> =
  s.enumOf<TermClassification>(TermClassification);
