import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Header3 = {
  /** Arbitrary header name to sign the request. */
  title?: string | null;
  /** Random string to sign the request. */
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const header3Schema: Schema<Header3> = s.object<Header3>(
  {
    title: s.optionalNullable(s.string()),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
