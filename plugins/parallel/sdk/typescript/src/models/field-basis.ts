import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { citationSchema, type Citation } from "./citation.js";
import { confidenceSchema, type Confidence } from "./unions/confidence.js";

/** Citations and reasoning supporting one field of a task output. */
export type FieldBasis = {
  /** Name of the output field. */
  field: string;
  /** List of citations supporting the output field. */
  citations?: Citation[];
  /** Reasoning for the output field. */
  reasoning: string;
  /** Confidence level for the output field. Only certain processors provide confidence levels. */
  confidence?: Confidence;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fieldBasisSchema: Schema<FieldBasis> = s.object<FieldBasis>(
  {
    field: s.string(),
    citations: s.optional(s.array(s.lazy(() => citationSchema))),
    reasoning: s.string(),
    confidence: s.optional(s.lazy(() => confidenceSchema)),
  },
  { additionalProperties: s.json() },
);
