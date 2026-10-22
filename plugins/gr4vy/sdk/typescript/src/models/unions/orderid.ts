import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Overrides the `orderId` passed to the Worldpay VAP API, which defaults to the Gr4vy transaction
 * ID.
 */
export type Orderid = string;

export const orderidSchema: Schema<Orderid> = s.of<Orderid>(s.union([s.string()]));
