import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childBlockSchema, type ChildBlock } from "./child-block.js";

export type BlockReference = {
  /** Unique identifier for the block. */
  blockId?: string;
  /** Offset of the start of the block within its parent block. */
  beginOffset?: number;
  /** Offset of the end of the block within its parent block. */
  endOffset?: number;
  /** List of child blocks within this block. */
  childBlocks?: ChildBlock[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const blockReferenceSchema: Schema<BlockReference> = s.object<BlockReference>(
  {
    blockId: s.optional(s.string()),
    beginOffset: s.optional(s.int()),
    endOffset: s.optional(s.int()),
    childBlocks: s.optional(s.array(s.lazy(() => childBlockSchema))),
    _keysMap: {
      blockId: "BlockId",
      beginOffset: "BeginOffset",
      endOffset: "EndOffset",
      childBlocks: "ChildBlocks",
    },
  },
  { additionalProperties: s.json() },
);
