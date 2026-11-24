import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsageResponse = {
  used: number;
  limit: number;
  remaining: number;
  /** Current billing period date (ISO 8601 date). */
  monthUtc: string;
  /** When the billing period resets (ISO 8601 datetime with timezone). */
  resetsAtUtc: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageResponseSchema: Schema<UsageResponse> = s.object<UsageResponse>(
  {
    used: s.int(),
    limit: s.int(),
    remaining: s.int(),
    monthUtc: s.string(),
    resetsAtUtc: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
