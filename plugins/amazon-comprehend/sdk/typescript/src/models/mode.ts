import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the mode in which the classifier will be trained. The classifier can be trained in
 * multi-class (single-label) mode or multi-label mode. Multi-class mode identifies a single class
 * label for each document and multi-label mode identifies one or more class labels for each
 * document. Multiple labels for an individual document are separated by a delimiter. The default
 * delimiter between labels is a pipe (|).
 */
export const Mode = {
  MultiClass: "MULTI_CLASS",
  MultiLabel: "MULTI_LABEL",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
