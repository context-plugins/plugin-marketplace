import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the end-user authentication and authorization. One of the following. Details are
 * described in the description.
 */
export const Result1 = {
  TransactionFailed: "TRANSACTION_FAILED",
  AccessDenied: "ACCESS_DENIED",
  Authorized: "AUTHORIZED",
} as const;
export type Result1 = (typeof Result1)[keyof typeof Result1] | (string & {});

export const result1Schema: EnumSchema<Result1> = s.enumOf<Result1>(Result1);
