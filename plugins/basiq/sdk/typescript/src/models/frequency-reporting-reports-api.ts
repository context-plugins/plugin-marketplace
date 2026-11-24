import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nextSchema, type Next } from "./next.js";

export type FrequencyReportingReportsApi = {
  /** Frequency type */
  type?: string;
  /** Frequency amount */
  amount?: string;
  /** Display name of the frequency */
  display?: string;
  next?: Next;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const frequencyReportingReportsApiSchema: Schema<FrequencyReportingReportsApi> =
  s.object<FrequencyReportingReportsApi>(
    {
      type: s.optional(s.string()),
      amount: s.optional(s.string()),
      display: s.optional(s.string()),
      next: s.optional(s.lazy(() => nextSchema)),
    },
    { additionalProperties: s.json() },
  );
