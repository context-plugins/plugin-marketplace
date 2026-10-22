import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ISO-4217 currency code that this gift card has a balance for. */
export type Currency3 = string;

export const currency3Schema: Schema<Currency3> = s.of<Currency3>(s.union([s.string()]));
