import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The redirect URL to redirect a buyer to after they have authorized the payment method. */
export type RedirectUrl8 = string;

export const redirectUrl8Schema: Schema<RedirectUrl8> = s.of<RedirectUrl8>(s.union([s.string()]));
