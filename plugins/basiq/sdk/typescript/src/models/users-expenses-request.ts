import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsersExpensesRequest = {
  /**
   * The list of accounts to be included in the expenses otherwise all the user accounts will be
   * included in the summary
   */
  accounts?: string[];
  /**
   * The first/start month to be included in the expense output e.g. "fromMonth":"2019-05".
   * Resulting expenses resource will be based on data between fromMonth and toMonth.
   */
  fromMonth?: string;
  /**
   * The last/end month to be included in the expense output e.g. "toMonth":"2019-09". Resulting
   * expenses resource will be based on data between fromMonth and toMonth.
   */
  toMonth?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersExpensesRequestSchema: Schema<UsersExpensesRequest> = s.object<UsersExpensesRequest>(
  {
    accounts: s.optional(s.array(s.string())),
    fromMonth: s.optional(s.string()),
    toMonth: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
