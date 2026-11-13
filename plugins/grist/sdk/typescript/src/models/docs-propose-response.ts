import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { docComparisonSchema, type DocComparison } from "./doc-comparison.js";

export type DocsProposeResponse = {
  /** Proposal ID */
  id?: number;
  /** Comparison result between two document versions */
  comparison?: DocComparison;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsProposeResponseSchema: Schema<DocsProposeResponse> = s.object<DocsProposeResponse>(
  {
    id: s.optional(s.int()),
    comparison: s.optional(s.lazy(() => docComparisonSchema)),
  },
  { additionalProperties: s.json() },
);
