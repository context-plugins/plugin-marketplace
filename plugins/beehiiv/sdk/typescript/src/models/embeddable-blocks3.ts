import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { headingLevel1Schema, type HeadingLevel1 } from "./heading-level1.js";
import {
  paragraphBlockTextSectionSchema,
  type ParagraphBlockTextSection,
} from "./paragraph-block-text-section.js";
import { textAlignment6Schema, type TextAlignment6 } from "./text-alignment6.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type EmbeddableBlocks3 = {
  /** Discriminator value: heading @default "heading" */
  type?: "heading";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The level of the header (e.g., 1, 2, 3, etc.). */
  level: HeadingLevel1;
  /** The text alignment of the header (e.g., left, center, right). */
  textAlignment?: TextAlignment6;
  /** The text content of the header. Ignored if `formattedText` is provided. */
  text?: string;
  /** The formatted content of the header, supporting links and inline styling. */
  formattedText?: ParagraphBlockTextSection[];
  /** Whether the header should be an anchor header. @default true */
  anchorHeader?: boolean;
  /** Whether the header should be included in the table of contents. @default true */
  anchorIncludeInToc?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const embeddableBlocks3Schema: Schema<EmbeddableBlocks3> = s.object<EmbeddableBlocks3>(
  {
    type: s.defaulted(s.literal("heading"), "heading"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    level: headingLevel1Schema,
    textAlignment: s.optional(s.lazy(() => textAlignment6Schema)),
    text: s.optional(s.string()),
    formattedText: s.optional(s.array(s.lazy(() => paragraphBlockTextSectionSchema))),
    anchorHeader: s.defaulted(s.boolean(), true),
    anchorIncludeInToc: s.defaulted(s.boolean(), true),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
