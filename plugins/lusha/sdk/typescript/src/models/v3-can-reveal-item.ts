import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";

/** Indicates a data type that can be revealed and its credit cost */
export type V3CanRevealItem = {
  field?: Field;
  /** Credit cost (0 when already revealed for this account) */
  credits?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3CanRevealItemSchema: Schema<V3CanRevealItem> = s.object<V3CanRevealItem>(
  {
    field: s.optional(s.lazy(() => fieldSchema)),
    credits: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
