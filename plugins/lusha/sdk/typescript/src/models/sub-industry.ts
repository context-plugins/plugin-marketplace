import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubIndustry = {
  value?: string;
  id?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subIndustrySchema: Schema<SubIndustry> = s.object<SubIndustry>(
  {
    value: s.optional(s.string()),
    id: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
