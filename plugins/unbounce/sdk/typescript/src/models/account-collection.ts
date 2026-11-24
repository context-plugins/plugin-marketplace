import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

export type AccountCollection = {
  accounts?: Account[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountCollectionSchema: Schema<AccountCollection> = s.object<AccountCollection>(
  {
    accounts: s.optional(s.array(s.lazy(() => accountSchema))),
  },
  { additionalProperties: s.json() },
);
