import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The BCP 47 locale used to localize the PayPal Checkout page. For example, `en-US` or `fr-FR`. */
export type Locale1 = string;

export const locale1Schema: Schema<Locale1> = s.of<Locale1>(s.union([s.string()]));
