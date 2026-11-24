import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Gs1Value = {
  /** A valid GS1 application identifier, qualifier, attribute, etc. */
  key?: string;
  /** A syntactically correct value associated with the application identifier in the key field. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gs1ValueSchema: Schema<Gs1Value> = s.object<Gs1Value>(
  {
    key: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
