import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount6Schema, type Amount6 } from "./unions/amount6.js";

export type ThreeDSecure = {
  /**
   * The amount to be used for 3DS authentication. Optionally set this value to authenticate a
   * greater amount than the transaction amount.
   */
  amount?: Amount6;
};

export const threeDSecureSchema: Schema<ThreeDSecure> = s.object<ThreeDSecure>({
  amount: s.optional(s.lazy(() => amount6Schema)),
});
