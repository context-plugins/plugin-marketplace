import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The Stripe Connect account to target using the `transfer_data.destination` request parameter. */
export type TransferDataDestination = string;

export const transferDataDestinationSchema: Schema<TransferDataDestination> = s.of<TransferDataDestination>(
  s.union([s.string()]),
);
