import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of link. */
export const Verb1 = {
  Blocks: "blocks",
  Duplicates: "duplicates",
  RelatesTo: "relates to",
} as const;
export type Verb1 = (typeof Verb1)[keyof typeof Verb1] | (string & {});

export const verb1Schema: EnumSchema<Verb1> = s.enumOf<Verb1>(Verb1);
