import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant's brand color. */
export type MerchantColor = string;

export const merchantColorSchema: Schema<MerchantColor> = s.of<MerchantColor>(s.union([s.string()]));
