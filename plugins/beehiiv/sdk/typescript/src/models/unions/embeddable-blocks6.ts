import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { embeddableBlocksSchema, type EmbeddableBlocks } from "../embeddable-blocks.js";
import { embeddableBlocks1Schema, type EmbeddableBlocks1 } from "../embeddable-blocks1.js";
import { embeddableBlocks2Schema, type EmbeddableBlocks2 } from "../embeddable-blocks2.js";
import { embeddableBlocks3Schema, type EmbeddableBlocks3 } from "../embeddable-blocks3.js";
import { embeddableBlocks4Schema, type EmbeddableBlocks4 } from "../embeddable-blocks4.js";
import { embeddableBlocks5Schema, type EmbeddableBlocks5 } from "../embeddable-blocks5.js";

/** A block in the post content that can be embedded within a column. */
export type EmbeddableBlocks6 =
  | EmbeddableBlocks
  | EmbeddableBlocks1
  | EmbeddableBlocks2
  | EmbeddableBlocks3
  | EmbeddableBlocks4
  | EmbeddableBlocks5;

export const embeddableBlocks6Schema: Schema<EmbeddableBlocks6> = s.of<EmbeddableBlocks6>(
  s.union([
    s.lazy(() => embeddableBlocksSchema),
    s.lazy(() => embeddableBlocks1Schema),
    s.lazy(() => embeddableBlocks2Schema),
    s.lazy(() => embeddableBlocks3Schema),
    s.lazy(() => embeddableBlocks4Schema),
    s.lazy(() => embeddableBlocks5Schema),
  ]),
);
