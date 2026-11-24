import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Defines a header message. A header can have a key and a value. */
export type Header = {
  /** The Value of the header. */
  value?: string;
  /** The Key of the header. */
  key?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const headerSchema: Schema<Header> = s.object<Header>(
  {
    value: s.optional(s.string()),
    key: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
