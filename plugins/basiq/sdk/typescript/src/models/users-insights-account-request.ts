import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsersInsightsAccountRequest = {
  /** The account number to search for insights */
  accountNumber: string;
  /** The type of account to search for insights */
  accountType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersInsightsAccountRequestSchema: Schema<UsersInsightsAccountRequest> =
  s.object<UsersInsightsAccountRequest>(
    {
      accountNumber: s.string(),
      accountType: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
