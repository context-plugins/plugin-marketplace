import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { guestBuyerSchema, type GuestBuyer } from "../guest-buyer.js";

/** The guest buyer for the payment link. */
export type Buyer14 = GuestBuyer;

export const buyer14Schema: Schema<Buyer14> = s.of<Buyer14>(s.union([s.lazy(() => guestBuyerSchema)]));
