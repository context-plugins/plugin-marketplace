import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type SectionableBlock10 = {
  /** Discriminator value: poll @default "poll" */
  type?: "poll";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The ID of the poll you wish to include. */
  pollId: string;
  /** Whether to show the poll options initially. Defaults to false. */
  showOptionsInitially?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionableBlock10Schema: Schema<SectionableBlock10> = s.object<SectionableBlock10>(
  {
    type: s.defaulted(s.literal("poll"), "poll"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    pollId: s.string(),
    showOptionsInitially: s.optional(s.boolean()),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
      pollId: "poll_id",
      showOptionsInitially: "show_options_initially",
    },
  },
  { additionalProperties: s.json() },
);
