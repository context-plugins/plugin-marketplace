import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LayerReservationRep = {
  /** The key of the experiment */
  experimentKey: string;
  /** The key of the flag */
  flagKey: string;
  /** The percentage of traffic reserved for the experiment */
  reservationPercent: number;
};

export const layerReservationRepSchema: Schema<LayerReservationRep> = s.object<LayerReservationRep>({
  experimentKey: s.string(),
  flagKey: s.string(),
  reservationPercent: s.int(),
});
