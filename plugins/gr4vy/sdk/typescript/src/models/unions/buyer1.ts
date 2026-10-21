import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { guestBuyerSchema, type GuestBuyer } from "../guest-buyer.js";

/**
 * Provide buyer details for the transaction. No buyer resource will be created on Gr4vy when used.
 */
export type Buyer1 = GuestBuyer;

export const buyer1Schema: Schema<Buyer1> = s.of<Buyer1>(s.union([s.lazy(() => guestBuyerSchema)]));
