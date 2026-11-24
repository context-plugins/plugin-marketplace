import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name1Schema, type Name1 } from "./name1.js";

export type AnalyticsBinKey = {
  /** The criterion by which to bin the results. */
  name?: Name1;
  /** The value of the criterion that defines the bin. */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsBinKeySchema: Schema<AnalyticsBinKey> = s.object<AnalyticsBinKey>(
  {
    name: s.optional(s.lazy(() => name1Schema)),
    value: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
