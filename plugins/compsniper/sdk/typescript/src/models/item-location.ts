import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ItemLocation = {
  Default: "default",
  Domestic: "domestic",
  Worldwide: "worldwide",
} as const;
export type ItemLocation = (typeof ItemLocation)[keyof typeof ItemLocation] | (string & {});

export const itemLocationSchema: EnumSchema<ItemLocation> = s.enumOf<ItemLocation>(ItemLocation);
