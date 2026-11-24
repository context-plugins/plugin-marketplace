import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StripeSignature = string;

export const stripeSignatureSchema: Schema<StripeSignature> = s.of<StripeSignature>(s.union([s.string()]));
