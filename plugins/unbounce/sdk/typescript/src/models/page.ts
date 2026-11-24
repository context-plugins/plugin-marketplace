import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Page = {
  id?: string;
  name?: string;
  subAccountId?: string;
  domainId?: string;
  url?: string;
  state?: string;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pageSchema: Schema<Page> = s.object<Page>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    subAccountId: s.optional(s.string()),
    domainId: s.optional(s.string()),
    url: s.optional(s.string()),
    state: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      subAccountId: "sub_account_id",
      domainId: "domain_id",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
