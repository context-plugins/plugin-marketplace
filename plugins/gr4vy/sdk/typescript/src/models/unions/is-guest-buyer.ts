import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Defines if this payment is made using guest checkout. */
export type IsGuestBuyer = boolean;

export const isGuestBuyerSchema: Schema<IsGuestBuyer> = s.of<IsGuestBuyer>(s.union([s.boolean()]));
