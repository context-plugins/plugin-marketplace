import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Block = {
  /** The block index. */
  blockIndex?: number;
  /** The block token for the block index. */
  blockToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const blockSchema: Schema<Block> = s.object<Block>(
  {
    blockIndex: s.optional(s.int()),
    blockToken: s.optional(s.string()),
    _keysMap: {
      blockIndex: "BlockIndex",
      blockToken: "BlockToken",
    },
  },
  { additionalProperties: s.json() },
);
