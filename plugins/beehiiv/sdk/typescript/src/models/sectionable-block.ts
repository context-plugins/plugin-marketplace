import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paragraphBlockTextSectionSchema,
  type ParagraphBlockTextSection,
} from "./paragraph-block-text-section.js";
import { textAlignment1Schema, type TextAlignment1 } from "./text-alignment1.js";
import { textAlignment2Schema, type TextAlignment2 } from "./text-alignment2.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type SectionableBlock = {
  /** Discriminator value: paragraph @default "paragraph" */
  type?: "paragraph";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The plaintext content of the paragraph. */
  plaintext?: string;
  /** The formatted content of the paragraph. */
  formattedText?: ParagraphBlockTextSection[];
  /** The text alignment of the paragraph (e.g., left, center, right). */
  textAlignment?: TextAlignment1;
  /** Legacy paragraph alignment field. Use `textAlignment` for new integrations. */
  textAlign?: TextAlignment2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionableBlockSchema: Schema<SectionableBlock> = s.object<SectionableBlock>(
  {
    type: s.defaulted(s.literal("paragraph"), "paragraph"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    plaintext: s.optional(s.string()),
    formattedText: s.optional(s.array(s.lazy(() => paragraphBlockTextSectionSchema))),
    textAlignment: s.optional(s.lazy(() => textAlignment1Schema)),
    textAlign: s.optional(s.lazy(() => textAlignment2Schema)),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
