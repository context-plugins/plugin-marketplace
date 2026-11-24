import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sectionableBlock14Schema, type SectionableBlock14 } from "./unions/sectionable-block14.js";
import { visibilitySettings33Schema, type VisibilitySettings33 } from "./visibility-settings33.js";
import { visualSettings32Schema, type VisualSettings32 } from "./visual-settings32.js";

export type Block16 = {
  /** Discriminator value: section @default "section" */
  type?: "section";
  /**
   * The blocks to group inside this section. Must contain at least one block. Cannot contain
   * `section` or `columns` blocks.
   */
  blocks: SectionableBlock14[];
  /**
   * Optional styling applied to the section as a whole (background color, padding, borders, etc.).
   */
  visualSettings?: VisualSettings32;
  /**
   * Optional rules for when/where this section is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings33;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const block16Schema: Schema<Block16> = s.object<Block16>(
  {
    type: s.defaulted(s.literal("section"), "section"),
    blocks: s.array(s.lazy(() => sectionableBlock14Schema)),
    visualSettings: s.optional(s.lazy(() => visualSettings32Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings33Schema)),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
