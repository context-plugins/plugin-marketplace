import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Account = {
  id?: string;
  name?: string;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountSchema: Schema<Account> = s.object<Account>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
