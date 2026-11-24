import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Header = {
  /** Arbitrary header name to sign the request. */
  title?: string;
  /** Random string to sign the request. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const headerSchema: Schema<Header> = s.object<Header>(
  {
    title: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
