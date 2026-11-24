import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  automatedAdvertisementKind2Schema,
  type AutomatedAdvertisementKind2,
} from "./automated-advertisement-kind2.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type Block6 = {
  /**
   * Discriminator value: automated_advertisement_placement
   *
   * @default "automated_advertisement_placement"
   */
  type?: "automated_advertisement_placement";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The automated advertisement kind to fill at publish time. */
  advertisementKind: AutomatedAdvertisementKind2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const block6Schema: Schema<Block6> = s.object<Block6>(
  {
    type: s.defaulted(s.literal("automated_advertisement_placement"), "automated_advertisement_placement"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    advertisementKind: automatedAdvertisementKind2Schema,
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
      advertisementKind: "advertisement_kind",
    },
  },
  { additionalProperties: s.json() },
);
