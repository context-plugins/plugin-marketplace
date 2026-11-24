import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Device type for search results */
export const Device1 = {
  Desktop: "desktop",
  Mobile: "mobile",
} as const;
export type Device1 = (typeof Device1)[keyof typeof Device1] | (string & {});

export const device1Schema: EnumSchema<Device1> = s.enumOf<Device1>(Device1);
