import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the maintainer */
export const Kind22 = {
  Member: "member",
  Team: "team",
} as const;
export type Kind22 = (typeof Kind22)[keyof typeof Kind22] | (string & {});

export const kind22Schema: EnumSchema<Kind22> = s.enumOf<Kind22>(Kind22);
