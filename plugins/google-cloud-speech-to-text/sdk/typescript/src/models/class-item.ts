import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An item of the class. */
export type ClassItem = {
  /** The class item's value. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classItemSchema: Schema<ClassItem> = s.object<ClassItem>(
  {
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
