import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsersIncomeRequest = {
  /**
   * The list of accounts to be included in the income otherwise all the user accounts will be
   * included in the summary
   */
  accounts?: string[];
  /**
   * The first/start month to be included in the affordability output e.g. "fromMonth":"2019-05".
   * Resulting income resource will be based on data between fromMonth and toMonth
   */
  fromMonth?: string;
  /**
   * The first/start month to be included in the affordability output e.g. "fromMonth":"2019-05".
   * Resulting income resource will be based on data between fromMonth and toMonth
   */
  toMonth?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersIncomeRequestSchema: Schema<UsersIncomeRequest> = s.object<UsersIncomeRequest>(
  {
    accounts: s.optional(s.array(s.string())),
    fromMonth: s.optional(s.string()),
    toMonth: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
