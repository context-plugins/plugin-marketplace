import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The block represents a line of text or one word of text. WORD - A word that's detected on a
 * document page. A word is one or more ISO basic Latin script characters that aren't separated by
 * spaces. LINE - A string of tab-delimited, contiguous words that are detected on a document page
 */
export const BlockType = {
  Line: "LINE",
  Word: "WORD",
} as const;
export type BlockType = (typeof BlockType)[keyof typeof BlockType] | (string & {});

export const blockTypeSchema: EnumSchema<BlockType> = s.enumOf<BlockType>(BlockType);
