import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** defines how to render this particular displayable list card */
export const Format = {
  List: "LIST",
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (string & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
