import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableCellDataSchema, type TableCellData } from "./table-cell-data.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type SectionableBlock7 = {
  /** Discriminator value: table @default "table" */
  type?: "table";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The rows of the table. */
  rows: TableCellData[][];
  /** Whether the first row is a header row. @default true */
  headerRow?: boolean;
  /** Whether the first column is a header column. @default false */
  headerColumn?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionableBlock7Schema: Schema<SectionableBlock7> = s.object<SectionableBlock7>(
  {
    type: s.defaulted(s.literal("table"), "table"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    rows: s.array(s.array(s.lazy(() => tableCellDataSchema))),
    headerRow: s.defaulted(s.boolean(), true),
    headerColumn: s.defaulted(s.boolean(), false),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
