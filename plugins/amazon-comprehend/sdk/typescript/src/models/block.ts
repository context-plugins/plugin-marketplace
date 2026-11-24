import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blockTypeSchema, type BlockType } from "./block-type.js";
import { geometrySchema, type Geometry } from "./geometry.js";
import { relationshipsListItemSchema, type RelationshipsListItem } from "./relationships-list-item.js";

export type Block = {
  /** Unique identifier for the block. */
  id?: string;
  /**
   * The block represents a line of text or one word of text. WORD - A word that's detected on a
   * document page. A word is one or more ISO basic Latin script characters that aren't separated by
   * spaces. LINE - A string of tab-delimited, contiguous words that are detected on a document page
   */
  blockType?: BlockType;
  /** The word or line of text extracted from the block. */
  text?: string;
  /** Page number where the block appears. */
  page?: number;
  geometry?: Geometry;
  /**
   * A list of child blocks of the current block. For example, a LINE object has child blocks for
   * each WORD block that's part of the line of text.
   */
  relationships?: RelationshipsListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const blockSchema: Schema<Block> = s.object<Block>(
  {
    id: s.optional(s.string()),
    blockType: s.optional(s.lazy(() => blockTypeSchema)),
    text: s.optional(s.string()),
    page: s.optional(s.int()),
    geometry: s.optional(s.lazy(() => geometrySchema)),
    relationships: s.optional(s.array(s.lazy(() => relationshipsListItemSchema))),
    _keysMap: {
      id: "Id",
      blockType: "BlockType",
      text: "Text",
      page: "Page",
      geometry: "Geometry",
      relationships: "Relationships",
    },
  },
  { additionalProperties: s.json() },
);
