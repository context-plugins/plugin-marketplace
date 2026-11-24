import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter = {
  Stream: "stream",
  Toplevel: "toplevel",
} as const;
export type Filter = (typeof Filter)[keyof typeof Filter] | (string & {});

export const filterSchema: EnumSchema<Filter> = s.enumOf<Filter>(Filter);
