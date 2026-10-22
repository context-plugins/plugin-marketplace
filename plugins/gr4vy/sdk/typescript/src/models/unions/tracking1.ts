import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { trackingSchema, type Tracking } from "../tracking.js";

/** The shipment tracking details associated with the capture. */
export type Tracking1 = Tracking[];

export const tracking1Schema: Schema<Tracking1> = s.of<Tracking1>(
  s.union([s.array(s.lazy(() => trackingSchema))]),
);
