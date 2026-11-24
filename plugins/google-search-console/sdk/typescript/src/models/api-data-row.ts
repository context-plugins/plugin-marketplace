import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiDataRow = {
  clicks?: number;
  impressions?: number;
  keys?: string[];
  position?: number;
  ctr?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiDataRowSchema: Schema<ApiDataRow> = s.object<ApiDataRow>(
  {
    clicks: s.optional(s.float64()),
    impressions: s.optional(s.float64()),
    keys: s.optional(s.array(s.string())),
    position: s.optional(s.float64()),
    ctr: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
