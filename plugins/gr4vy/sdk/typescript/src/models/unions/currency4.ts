import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 4217 currency code (3 characters). If null, the configuration applies to all currencies. */
export type Currency4 = string;

export const currency4Schema: Schema<Currency4> = s.of<Currency4>(s.union([s.string()]));
