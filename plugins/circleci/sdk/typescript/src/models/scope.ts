import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The scope of the webhook */
export type Scope = {
  /** The scope ID */
  id?: string;
  /** The scope type */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scopeSchema: Schema<Scope> = s.object<Scope>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
