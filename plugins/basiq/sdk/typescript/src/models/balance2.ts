import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Balance criteria for filtering accounts. Only 'min' is required, 'max' is optional. */
export type Balance2 = {
  /** Minimum balance threshold (as string) */
  min: string;
  /** Maximum balance threshold (as string, optional) */
  max?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balance2Schema: Schema<Balance2> = s.object<Balance2>(
  {
    min: s.string(),
    max: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
