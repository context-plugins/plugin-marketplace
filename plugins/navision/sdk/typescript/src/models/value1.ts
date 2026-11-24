import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Value1 = {
  applicationVersion?: string;
  platformVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const value1Schema: Schema<Value1> = s.object<Value1>(
  {
    applicationVersion: s.optional(s.string()),
    platformVersion: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
