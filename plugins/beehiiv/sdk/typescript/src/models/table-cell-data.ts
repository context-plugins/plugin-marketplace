import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paragraphBlockTextSectionSchema,
  type ParagraphBlockTextSection,
} from "./paragraph-block-text-section.js";
import { textAlignment13Schema, type TextAlignment13 } from "./text-alignment13.js";

export type TableCellData = {
  /** The text content of the cell. */
  text?: string;
  /** The formatted content of the cell. */
  formattedText?: ParagraphBlockTextSection[];
  /** The text alignment of the cell. */
  alignment?: TextAlignment13;
  /** The number of columns the cell spans. @default 1 */
  colspan?: number;
  /** The number of rows the cell spans. @default 1 */
  rowspan?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tableCellDataSchema: Schema<TableCellData> = s.object<TableCellData>(
  {
    text: s.optional(s.string()),
    formattedText: s.optional(s.array(s.lazy(() => paragraphBlockTextSectionSchema))),
    alignment: s.optional(s.lazy(() => textAlignment13Schema)),
    colspan: s.defaulted(s.int(), 1),
    rowspan: s.defaulted(s.int(), 1),
  },
  { additionalProperties: s.json() },
);
