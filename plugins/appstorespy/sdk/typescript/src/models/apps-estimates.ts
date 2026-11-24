import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppsEstimates = {
  id: string;
  month: string;
  downloads?: number;
  revenue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appsEstimatesSchema: Schema<AppsEstimates> = s.object<AppsEstimates>(
  {
    id: s.string(),
    month: s.string(),
    downloads: s.optional(s.int()),
    revenue: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
