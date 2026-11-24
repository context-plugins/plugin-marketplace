import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CardBatchAccepted = {
  jobId?: string;
  status?: string;
  totalCards?: number;
  billing?: string;
  resultsUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardBatchAcceptedSchema: Schema<CardBatchAccepted> = s.object<CardBatchAccepted>(
  {
    jobId: s.optional(s.string()),
    status: s.optional(s.string()),
    totalCards: s.optional(s.int()),
    billing: s.optional(s.string()),
    resultsUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
