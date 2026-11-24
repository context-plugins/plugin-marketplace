import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnBlockSchema, type ColumnBlock } from "./column-block.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type Block7 = {
  /** Discriminator value: columns @default "columns" */
  type?: "columns";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** Whether columns should stack vertically on mobile devices. @default true */
  stackOnMobile?: boolean;
  /** The blocks that make up the columns. */
  columns: ColumnBlock[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const block7Schema: Schema<Block7> = s.object<Block7>(
  {
    type: s.defaulted(s.literal("columns"), "columns"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    stackOnMobile: s.defaulted(s.boolean(), true),
    columns: s.array(s.lazy(() => columnBlockSchema)),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
