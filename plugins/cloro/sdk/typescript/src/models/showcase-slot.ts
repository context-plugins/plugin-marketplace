import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { imagePositionSchema, type ImagePosition } from "./image-position.js";
import { slotPlacementSchema, type SlotPlacement } from "./slot-placement.js";

/** Single visual slot inside a product showcase */
export type ShowcaseSlot = {
  fit?: string;
  /** Pixel offset for image positioning within a slot */
  position?: ImagePosition;
  zoom?: number;
  /** Percent-based placement of a showcase slot within its container */
  placement?: SlotPlacement;
  imageBlendMode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const showcaseSlotSchema: Schema<ShowcaseSlot> = s.object<ShowcaseSlot>(
  {
    fit: s.optional(s.string()),
    position: s.optional(s.lazy(() => imagePositionSchema)),
    zoom: s.optional(s.float64()),
    placement: s.optional(s.lazy(() => slotPlacementSchema)),
    imageBlendMode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
