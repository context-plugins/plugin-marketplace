import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Subclass1 = {
  /** SubClass Details */
  title?: string;
  /** SubClass Code */
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subclass1Schema: Schema<Subclass1> = s.object<Subclass1>(
  {
    title: s.optional(s.string()),
    code: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
