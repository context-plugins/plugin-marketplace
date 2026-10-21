import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The 2-letter ISO country code of the merchant to be displayed in a statement descriptor. */
export type Country5 = string;

export const country5Schema: Schema<Country5> = s.of<Country5>(s.union([s.string()]));
