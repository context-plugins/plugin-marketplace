import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Device preset — sets viewport, device scale, and user agent in one parameter. Explicit
 * width/height/userAgent still win.
 */
export const Device = {
  Desktop: "desktop",
  Iphone15: "iphone_15",
  IphoneSe: "iphone_se",
  Pixel8: "pixel_8",
  Ipad: "ipad",
  IpadPro: "ipad_pro",
} as const;
export type Device = (typeof Device)[keyof typeof Device] | (string & {});

export const deviceSchema: EnumSchema<Device> = s.enumOf<Device>(Device);
