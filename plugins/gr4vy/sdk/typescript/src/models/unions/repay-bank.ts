import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { repayBankOptionsSchema, type RepayBankOptions } from "../repay-bank-options.js";

/** Custom options to be passed to the `repay-bank` connector. */
export type RepayBank = RepayBankOptions;

export const repayBankSchema: Schema<RepayBank> = s.of<RepayBank>(
  s.union([s.lazy(() => repayBankOptionsSchema)]),
);
