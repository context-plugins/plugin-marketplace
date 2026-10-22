import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { secCodeSchema, type SecCode } from "../sec-code.js";

/**
 * The Nacha Standard Entry Class code describing how the account holder authorized an ACH debit.
 * When omitted, `TelDebit` is used for a `moto` payment source and `WebDebit` otherwise. Ignored
 * for business accounts, which Repay requires to use `CcdDebit`.
 */
export type SecCode1 = SecCode;

export const secCode1Schema: Schema<SecCode1> = s.of<SecCode1>(s.union([s.lazy(() => secCodeSchema)]));
