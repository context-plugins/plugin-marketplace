import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Device type values for use in dynamic routing rules (device_match / device_exclude) */
export const DynamicRoutingDeviceEnum = {
  Mobile: "mobile",
  Tablet: "tablet",
  Desktop: "desktop",
} as const;
export type DynamicRoutingDeviceEnum =
  | (typeof DynamicRoutingDeviceEnum)[keyof typeof DynamicRoutingDeviceEnum]
  | (string & {});

export const dynamicRoutingDeviceEnumSchema: EnumSchema<DynamicRoutingDeviceEnum> =
  s.enumOf<DynamicRoutingDeviceEnum>(DynamicRoutingDeviceEnum);
