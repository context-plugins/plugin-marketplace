import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sizes1Schema, type Sizes1 } from "./sizes1.js";
import { textAlignment5Schema, type TextAlignment5 } from "./text-alignment5.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type SectionableBlock2 = {
  /** Discriminator value: button @default "button" */
  type?: "button";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The URL the button should use. */
  href: string;
  /** The text content of the button. */
  text: string;
  /** The target of the button (e.g., _blank). */
  target?: string;
  /** The text alignment of the button. */
  alignment?: TextAlignment5;
  /** The size of the button (e.g., small, normal, large). */
  size?: Sizes1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionableBlock2Schema: Schema<SectionableBlock2> = s.object<SectionableBlock2>(
  {
    type: s.defaulted(s.literal("button"), "button"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    href: s.string(),
    text: s.string(),
    target: s.optional(s.string()),
    alignment: s.optional(s.lazy(() => textAlignment5Schema)),
    size: s.optional(s.lazy(() => sizes1Schema)),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
