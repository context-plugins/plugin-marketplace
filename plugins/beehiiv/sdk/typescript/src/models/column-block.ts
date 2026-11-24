import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnPosition1Schema, type ColumnPosition1 } from "./column-position1.js";
import {
  columnVerticalAlignment2Schema,
  type ColumnVerticalAlignment2,
} from "./column-vertical-alignment2.js";
import { embeddableBlocks6Schema, type EmbeddableBlocks6 } from "./unions/embeddable-blocks6.js";

export type ColumnBlock = {
  /** The column position. This field is deprecated but supported for existing column layouts. */
  position?: ColumnPosition1;
  /** The column width percentage. When omitted, width is calculated automatically. */
  width?: number;
  /** The vertical alignment of the column content. */
  verticalAlign?: ColumnVerticalAlignment2;
  /** The blocks that make up the column. */
  blocks: EmbeddableBlocks6[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnBlockSchema: Schema<ColumnBlock> = s.object<ColumnBlock>(
  {
    position: s.optional(s.lazy(() => columnPosition1Schema)),
    width: s.optional(s.int()),
    verticalAlign: s.optional(s.lazy(() => columnVerticalAlignment2Schema)),
    blocks: s.array(s.lazy(() => embeddableBlocks6Schema)),
  },
  { additionalProperties: s.json() },
);
