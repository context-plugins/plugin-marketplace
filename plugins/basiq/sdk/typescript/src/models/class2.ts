import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Class2 = {
  /** Class Details */
  title?: string;
  /** Class Code */
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const class2Schema: Schema<Class2> = s.object<Class2>(
  {
    title: s.optional(s.string()),
    code: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
