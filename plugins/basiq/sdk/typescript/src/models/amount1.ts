import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { averageSchema, type Average } from "./average.js";

export type Amount1 = {
  /** Total amount for the subgroup */
  total?: string;
  /** Minimum amount for the subgroup */
  min?: string;
  /** Maximum amount for the subgroup */
  max?: string;
  average?: Average;
  /** Number of stable months */
  stableMonths?: number;
  /** Number of secure months */
  secureMonths?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const amount1Schema: Schema<Amount1> = s.object<Amount1>(
  {
    total: s.optional(s.string()),
    min: s.optional(s.string()),
    max: s.optional(s.string()),
    average: s.optional(s.lazy(() => averageSchema)),
    stableMonths: s.optional(s.int()),
    secureMonths: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
