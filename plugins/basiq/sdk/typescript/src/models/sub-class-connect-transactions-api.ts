import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The subClass attribute will only return values for payment transactions (i.e. will be empty for
 * all others) plus [new] bank fee transactions for those relating to account conduct such as
 * account overdrawn and direct debit dishonours.
 */
export type SubClassConnectTransactionsApi = {
  /** code */
  code?: string;
  /** SubClass title */
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subClassConnectTransactionsApiSchema: Schema<SubClassConnectTransactionsApi> =
  s.object<SubClassConnectTransactionsApi>(
    {
      code: s.optional(s.string()),
      title: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
