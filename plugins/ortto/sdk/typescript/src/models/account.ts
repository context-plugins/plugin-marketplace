import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Account = {
  fields?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountSchema: Schema<Account> = s.object<Account>(
  {
    fields: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
