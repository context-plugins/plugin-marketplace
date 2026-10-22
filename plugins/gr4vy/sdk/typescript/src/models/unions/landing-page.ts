import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The type of landing page to display on the PayPal Checkout. Use `LOGIN` to show the PayPal login
 * page, `GUEST_CHECKOUT` to show the guest checkout page, or `NO_PREFERENCE` to let PayPal decide.
 */
export type LandingPage = string;

export const landingPageSchema: Schema<LandingPage> = s.of<LandingPage>(s.union([s.string()]));
