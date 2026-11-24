import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonDoiTInsightsApiSchema, type ReasonDoiTInsightsApi } from "./reason-doi-tinsights-api.js";

/** Details for why an insight was dismissed. */
export type DismissalDetails = {
  /** The reason for dismissal. */
  reason?: ReasonDoiTInsightsApi;
  /** An optional free-text comment providing additional context. */
  comment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dismissalDetailsSchema: Schema<DismissalDetails> = s.object<DismissalDetails>(
  {
    reason: s.optional(s.lazy(() => reasonDoiTInsightsApiSchema)),
    comment: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
