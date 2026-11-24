import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userGetAccountDataSchema, type UserGetAccountData } from "./user-get-account-data.js";

/** Container object containing account data. */
export type UserGetAccount = {
  /** Always "list". */
  type: string;
  /** Count of accounts. */
  count: number;
  /** Accounts data. */
  data: UserGetAccountData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userGetAccountSchema: Schema<UserGetAccount> = s.object<UserGetAccount>(
  {
    type: s.string(),
    count: s.int(),
    data: s.array(s.lazy(() => userGetAccountDataSchema)),
  },
  { additionalProperties: s.json() },
);
