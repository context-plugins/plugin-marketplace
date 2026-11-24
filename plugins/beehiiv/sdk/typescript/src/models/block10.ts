import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type Block10 = {
  /** Discriminator value: html @default "html" */
  type?: "html";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /**
   * The raw HTML content. Note that `<style>` and `<link>` tags are removed during sanitization —
   * use inline styles for all visual styling.
   */
  html: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const block10Schema: Schema<Block10> = s.object<Block10>(
  {
    type: s.defaulted(s.literal("html"), "html"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    html: s.string(),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
