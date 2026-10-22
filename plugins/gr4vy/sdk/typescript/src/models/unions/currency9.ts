import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The currency code for the discount amount. */
export type Currency9 = string;

export const currency9Schema: Schema<Currency9> = s.of<Currency9>(s.union([s.string()]));
