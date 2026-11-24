import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Percent-based placement of a showcase slot within its container */
export type SlotPlacement = {
  leftPercent?: number;
  topPercent?: number;
  widthPercent?: number;
  heightPercent?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotPlacementSchema: Schema<SlotPlacement> = s.object<SlotPlacement>(
  {
    leftPercent: s.optional(s.float64()),
    topPercent: s.optional(s.float64()),
    widthPercent: s.optional(s.float64()),
    heightPercent: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
