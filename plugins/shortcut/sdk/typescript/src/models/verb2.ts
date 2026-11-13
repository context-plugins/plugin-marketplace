import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verb describing the link's relationship. */
export const Verb2 = {
  Blocks: "blocks",
  Duplicates: "duplicates",
  RelatesTo: "relates to",
} as const;
export type Verb2 = (typeof Verb2)[keyof typeof Verb2] | (string & {});

export const verb2Schema: EnumSchema<Verb2> = s.enumOf<Verb2>(Verb2);
