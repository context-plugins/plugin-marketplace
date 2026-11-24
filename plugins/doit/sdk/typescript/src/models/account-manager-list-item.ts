import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information of a DoiT account manager assigned to your organization. */
export type AccountManagerListItem = {
  email?: string;
  id?: string;
  name?: string;
  role?: string;
  calendlyLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountManagerListItemSchema: Schema<AccountManagerListItem> = s.object<AccountManagerListItem>(
  {
    email: s.optional(s.string()),
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    role: s.optional(s.string()),
    calendlyLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
