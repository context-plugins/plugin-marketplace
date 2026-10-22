import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 4217 currency code */
export type Currency8 = string;

export const currency8Schema: Schema<Currency8> = s.of<Currency8>(s.union([s.string()]));
