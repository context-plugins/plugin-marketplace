import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { layerReservationRepSchema, type LayerReservationRep } from "./layer-reservation-rep.js";

export type LayerConfigurationRep = {
  /** The experiment reservations for the layer */
  reservations: LayerReservationRep[];
};

export const layerConfigurationRepSchema: Schema<LayerConfigurationRep> = s.object<LayerConfigurationRep>({
  reservations: s.array(s.lazy(() => layerReservationRepSchema)),
});
