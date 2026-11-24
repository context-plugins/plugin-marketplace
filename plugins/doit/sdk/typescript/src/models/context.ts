import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Context = {
  accountId?: string;
  regions?: string[];
  /** Server-managed per-account deployment status. */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contextSchema: Schema<Context> = s.object<Context>(
  {
    accountId: s.optional(s.string()),
    regions: s.optional(s.array(s.string())),
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
