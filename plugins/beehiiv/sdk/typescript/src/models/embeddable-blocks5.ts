import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type EmbeddableBlocks5 = {
  /** Discriminator value: advertisement @default "advertisement" */
  type?: "advertisement";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The ID of the Advertisement opportunity. */
  opportunityId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const embeddableBlocks5Schema: Schema<EmbeddableBlocks5> = s.object<EmbeddableBlocks5>(
  {
    type: s.defaulted(s.literal("advertisement"), "advertisement"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    opportunityId: s.string(),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
      opportunityId: "opportunity_id",
    },
  },
  { additionalProperties: s.json() },
);
