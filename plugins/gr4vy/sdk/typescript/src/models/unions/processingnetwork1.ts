import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { processingnetworkSchema, type Processingnetwork } from "../processingnetwork.js";

/**
 * Card network to process the transaction on. If not provided, Paze defaults to the network on the
 * front of the card.
 */
export type Processingnetwork1 = Processingnetwork;

export const processingnetwork1Schema: Schema<Processingnetwork1> = s.of<Processingnetwork1>(
  s.union([s.lazy(() => processingnetworkSchema)]),
);
