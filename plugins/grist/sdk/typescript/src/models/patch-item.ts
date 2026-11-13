import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PatchItem = {
  /** Operation type (add, replace, remove). */
  op?: string;
  /** The field to be updated. */
  path?: string;
  /** New value for the field. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const patchItemSchema: Schema<PatchItem> = s.object<PatchItem>(
  {
    op: s.optional(s.string()),
    path: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
