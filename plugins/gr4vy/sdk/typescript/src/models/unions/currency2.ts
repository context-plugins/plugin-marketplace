import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ISO-4217 currency code for the `amount`. Required if `amount` is provided. */
export type Currency2 = string;

export const currency2Schema: Schema<Currency2> = s.of<Currency2>(s.union([s.string()]));
