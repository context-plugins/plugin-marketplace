import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Device the search is run from. 'desktop' returns the desktop news SERP; 'ios' (Safari on iPhone),
 * 'android' (Chrome on Android) and 'mobile' (alias for 'android') all return the mobile news SERP.
 */
export const Device = {
  Desktop: "desktop",
  Mobile: "mobile",
  Ios: "ios",
  Android: "android",
} as const;
export type Device = (typeof Device)[keyof typeof Device] | (string & {});

export const deviceSchema: EnumSchema<Device> = s.enumOf<Device>(Device);
