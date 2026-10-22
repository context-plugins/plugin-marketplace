import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionAuthorizationIncrementCreate = {
  /**
   * The amount by which to increment the authorization, in the smallest currency unit of the
   * transaction's currency. For example, `1299` cents to increment the authorization by `$12.99`.
   */
  amount: number;
};

export const transactionAuthorizationIncrementCreateSchema: Schema<TransactionAuthorizationIncrementCreate> =
  s.object<TransactionAuthorizationIncrementCreate>({
    amount: s.int(),
  });
