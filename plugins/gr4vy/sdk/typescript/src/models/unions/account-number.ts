import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The buyer account number */
export type AccountNumber = string;

export const accountNumberSchema: Schema<AccountNumber> = s.of<AccountNumber>(s.union([s.string()]));
