import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { trackingSchema, type Tracking } from "../tracking.js";

/** An array of shipment tracking details for this capture. */
export type Tracking111 = Tracking[];

export const tracking111Schema: Schema<Tracking111> = s.of<Tracking111>(
  s.union([s.array(s.lazy(() => trackingSchema))]),
);
