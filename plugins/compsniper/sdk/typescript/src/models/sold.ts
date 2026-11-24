import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** true = sold listings (default), false = active listings */
export const Sold = {
  True: "true",
  False: "false",
} as const;
export type Sold = (typeof Sold)[keyof typeof Sold] | (string & {});

export const soldSchema: EnumSchema<Sold> = s.enumOf<Sold>(Sold);
