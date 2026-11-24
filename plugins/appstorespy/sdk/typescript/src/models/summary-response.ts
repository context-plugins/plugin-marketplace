import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SummaryResponse = {
  total: number;
  ipd: number;
  revenue: number;
  downloads: number;
  available: number;
  removed: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summaryResponseSchema: Schema<SummaryResponse> = s.object<SummaryResponse>(
  {
    total: s.int(),
    ipd: s.int(),
    revenue: s.int(),
    downloads: s.int(),
    available: s.int(),
    removed: s.int(),
  },
  { additionalProperties: s.json() },
);
