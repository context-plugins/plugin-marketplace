import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MobileOs = {
  Ios: "ios",
  Android: "android",
} as const;
export type MobileOs = (typeof MobileOs)[keyof typeof MobileOs] | (string & {});

export const mobileOsSchema: EnumSchema<MobileOs> = s.enumOf<MobileOs>(MobileOs);
