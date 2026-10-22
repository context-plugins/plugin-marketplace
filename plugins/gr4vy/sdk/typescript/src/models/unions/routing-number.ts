import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The BIC for this SEPA bank account */
export type RoutingNumber = string;

export const routingNumberSchema: Schema<RoutingNumber> = s.of<RoutingNumber>(s.union([s.string()]));
