import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Device the search is run from. 'desktop' returns the desktop SERP; 'ios' (Safari on iPhone),
 * 'android' (Chrome on Android) and 'mobile' (alias for 'android') all return the mobile SERP.
 */
export const Device2 = {
  Desktop: "desktop",
  Mobile: "mobile",
  Ios: "ios",
  Android: "android",
} as const;
export type Device2 = (typeof Device2)[keyof typeof Device2] | (string & {});

export const device2Schema: EnumSchema<Device2> = s.enumOf<Device2>(Device2);
