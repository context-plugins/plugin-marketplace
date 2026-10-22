import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The signed checkout JWS as received from the Paze checkout response. */
export type CheckoutToken = string;

export const checkoutTokenSchema: Schema<CheckoutToken> = s.of<CheckoutToken>(s.union([s.string()]));
