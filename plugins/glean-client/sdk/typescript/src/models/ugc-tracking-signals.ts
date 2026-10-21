import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UgcTrackingSignals = {
  /** An opaque token that represents this particular UGC. To be used for `/feedback` reporting. */
  trackingToken?: string;
};

export const ugcTrackingSignalsSchema: Schema<UgcTrackingSignals> = s.object<UgcTrackingSignals>({
  trackingToken: s.optional(s.string()),
});
