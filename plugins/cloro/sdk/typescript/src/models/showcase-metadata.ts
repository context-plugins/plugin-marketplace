import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { showcaseBackgroundSchema, type ShowcaseBackground } from "./showcase-background.js";
import { showcaseImageSchema, type ShowcaseImage } from "./showcase-image.js";
import { showcaseSlotSchema, type ShowcaseSlot } from "./showcase-slot.js";

/**
 * Visual showcase metadata attached to a shopping product (image, background, and per-slot
 * placement).
 */
export type ShowcaseMetadata = {
  /** Image rendered as the hero of a product showcase */
  image?: ShowcaseImage;
  /** Background styling for a product showcase */
  background?: ShowcaseBackground;
  /** Slot map keyed by slot identifier */
  slots?: Record<string, ShowcaseSlot>;
  /** Free-form debug metadata; opaque to clients */
  debug?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const showcaseMetadataSchema: Schema<ShowcaseMetadata> = s.object<ShowcaseMetadata>(
  {
    image: s.optional(s.lazy(() => showcaseImageSchema)),
    background: s.optional(s.lazy(() => showcaseBackgroundSchema)),
    slots: s.optional(
      s.record(
        s.string(),
        s.lazy(() => showcaseSlotSchema),
      ),
    ),
    debug: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
