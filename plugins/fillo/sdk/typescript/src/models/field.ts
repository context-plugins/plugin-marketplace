import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Field = {
  id: string;
  label: string;
  kind: string;
  /** How many accepted responses answered this field. */
  answered: number;
  /** Option label → count, present only for choice-like fields (top 20 by count). */
  distribution?: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fieldSchema: Schema<Field> = s.object<Field>(
  {
    id: s.string(),
    label: s.string(),
    kind: s.string(),
    answered: s.int(),
    distribution: s.optional(s.record(s.string(), s.int())),
  },
  { additionalProperties: s.json() },
);
