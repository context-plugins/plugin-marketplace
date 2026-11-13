import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates
 * to".
 */
export const Verb = {
  Blocks: "blocks",
  Duplicates: "duplicates",
  RelatesTo: "relates to",
} as const;
export type Verb = (typeof Verb)[keyof typeof Verb] | (string & {});

export const verbSchema: EnumSchema<Verb> = s.enumOf<Verb>(Verb);
