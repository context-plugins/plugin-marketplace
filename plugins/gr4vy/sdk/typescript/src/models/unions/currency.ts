import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The currency code for this transaction. */
export type Currency = string;

export const currencySchema: Schema<Currency> = s.of<Currency>(s.union([s.string()]));
