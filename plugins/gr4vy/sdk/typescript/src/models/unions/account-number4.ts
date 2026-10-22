import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The buyer account number. */
export type AccountNumber4 = string;

export const accountNumber4Schema: Schema<AccountNumber4> = s.of<AccountNumber4>(s.union([s.string()]));
