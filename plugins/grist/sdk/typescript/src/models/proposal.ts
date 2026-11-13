import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { docComparisonSchema, type DocComparison } from "./doc-comparison.js";

export type Proposal = {
  /** Proposal ID */
  id?: number;
  /** Source document (fork) ID */
  srcDocId?: string;
  /** Destination document (trunk) ID */
  destDocId?: string;
  /** Whether the proposal has been retracted */
  retracted?: boolean;
  /** Comparison result between two document versions */
  comparison?: DocComparison;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const proposalSchema: Schema<Proposal> = s.object<Proposal>(
  {
    id: s.optional(s.int()),
    srcDocId: s.optional(s.string()),
    destDocId: s.optional(s.string()),
    retracted: s.optional(s.boolean()),
    comparison: s.optional(s.lazy(() => docComparisonSchema)),
  },
  { additionalProperties: s.json() },
);
