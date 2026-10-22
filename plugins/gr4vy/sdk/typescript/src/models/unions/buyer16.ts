import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { guestBuyerSchema, type GuestBuyer } from "../guest-buyer.js";

/**
 * Inline buyer details for the payout. Use this instead of the `buyer_id` or
 * `buyer_external_identifier`.
 */
export type Buyer16 = GuestBuyer;

export const buyer16Schema: Schema<Buyer16> = s.of<Buyer16>(s.union([s.lazy(() => guestBuyerSchema)]));
