import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Context1 = {
  accountId?: string;
  regions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const context1Schema: Schema<Context1> = s.object<Context1>(
  {
    accountId: s.optional(s.string()),
    regions: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
