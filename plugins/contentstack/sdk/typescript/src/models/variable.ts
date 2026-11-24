import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A reusable configuration variable for use across automations. */
export type Variable = {
  /** Unique identifier of the variable. */
  uid?: string;
  /** Display name of the variable. */
  name?: string;
  /** Machine-readable key for referencing the variable in automations. */
  key?: string;
  /** The value stored in the variable. Sensitive values may be masked. */
  value?: string;
  /** Indicates whether the variable value is treated as a secret. */
  isSecret?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const variableSchema: Schema<Variable> = s.object<Variable>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    key: s.optional(s.string()),
    value: s.optional(s.string()),
    isSecret: s.optional(s.boolean()),
    _keysMap: {
      isSecret: "is_secret",
    },
  },
  { additionalProperties: s.json() },
);
