import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { guestBuyerSchema, type GuestBuyer } from "../guest-buyer.js";

/**
 * Guest buyer details provided inline rather than creating a buyer resource beforehand and using
 * the `buyer_id` or `buyer_external_identifier` keys. No buyer resource will be created on Gr4vy
 * when used.
 */
export type Buyer19 = GuestBuyer;

export const buyer19Schema: Schema<Buyer19> = s.of<Buyer19>(s.union([s.lazy(() => guestBuyerSchema)]));
