import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LayerSnapshotRep = {
  /** Key of the layer the experiment was part of */
  key: string;
  /** Layer name at the time this experiment iteration was stopped */
  name: string;
  /** Percent of layer traffic that was reserved in the layer for this experiment iteration */
  reservationPercent: number;
  /**
   * Percent of layer traffic that was reserved for other experiments in the same environment, when
   * this experiment iteration was stopped
   */
  otherReservationPercent: number;
};

export const layerSnapshotRepSchema: Schema<LayerSnapshotRep> = s.object<LayerSnapshotRep>({
  key: s.string(),
  name: s.string(),
  reservationPercent: s.int(),
  otherReservationPercent: s.int(),
});
