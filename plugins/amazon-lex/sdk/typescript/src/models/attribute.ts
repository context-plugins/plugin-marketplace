import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The utterance attribute to sort by. */
export const Attribute = {
  HitCount: "HitCount",
  MissedCount: "MissedCount",
} as const;
export type Attribute = (typeof Attribute)[keyof typeof Attribute] | (string & {});

export const attributeSchema: EnumSchema<Attribute> = s.enumOf<Attribute>(Attribute);
