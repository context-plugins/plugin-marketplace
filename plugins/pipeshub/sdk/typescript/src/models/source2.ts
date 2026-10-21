import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Echoes the requested `source` query value. */
export const Source2 = {
  Owned: "owned",
  Shared: "shared",
} as const;
export type Source2 = (typeof Source2)[keyof typeof Source2] | (string & {});

export const source2Schema: EnumSchema<Source2> = s.enumOf<Source2>(Source2);
