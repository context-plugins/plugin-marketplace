import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Array of individual rules that define the conditions */
export type Rules = {
  /** The field to evaluate the condition against */
  field: string;
  /** The comparison operator */
  operator: string;
  /** The value to compare against */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rulesSchema: Schema<Rules> = s.object<Rules>(
  {
    field: s.string(),
    operator: s.string(),
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
