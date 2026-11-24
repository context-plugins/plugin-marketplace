import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

/** A list of external service account connections. */
export type AccountList = {
  /** Array of account connection objects. */
  data?: Account[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountListSchema: Schema<AccountList> = s.object<AccountList>(
  {
    data: s.optional(s.array(s.lazy(() => accountSchema))),
  },
  { additionalProperties: s.json() },
);
