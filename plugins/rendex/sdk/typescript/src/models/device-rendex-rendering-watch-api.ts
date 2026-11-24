import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeviceRendexRenderingWatchApi = {
  Desktop: "desktop",
  Iphone15: "iphone_15",
  IphoneSe: "iphone_se",
  Pixel8: "pixel_8",
  Ipad: "ipad",
  IpadPro: "ipad_pro",
} as const;
export type DeviceRendexRenderingWatchApi =
  | (typeof DeviceRendexRenderingWatchApi)[keyof typeof DeviceRendexRenderingWatchApi]
  | (string & {});

export const deviceRendexRenderingWatchApiSchema: EnumSchema<DeviceRendexRenderingWatchApi> =
  s.enumOf<DeviceRendexRenderingWatchApi>(DeviceRendexRenderingWatchApi);
