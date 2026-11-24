import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Device1 = {
  Desktop: "desktop",
  Iphone15: "iphone_15",
  IphoneSe: "iphone_se",
  Pixel8: "pixel_8",
  Ipad: "ipad",
  IpadPro: "ipad_pro",
} as const;
export type Device1 = (typeof Device1)[keyof typeof Device1] | (string & {});

export const device1Schema: EnumSchema<Device1> = s.enumOf<Device1>(Device1);
