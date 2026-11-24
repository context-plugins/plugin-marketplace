import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChildBlock = {
  /** Unique identifier for the child block. */
  childBlockId?: string;
  /** Offset of the start of the child block within its parent block. */
  beginOffset?: number;
  /** Offset of the end of the child block within its parent block. */
  endOffset?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const childBlockSchema: Schema<ChildBlock> = s.object<ChildBlock>(
  {
    childBlockId: s.optional(s.string()),
    beginOffset: s.optional(s.int()),
    endOffset: s.optional(s.int()),
    _keysMap: {
      childBlockId: "ChildBlockId",
      beginOffset: "BeginOffset",
      endOffset: "EndOffset",
    },
  },
  { additionalProperties: s.json() },
);
