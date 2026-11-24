import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Device = {
  Desktop: "desktop",
  Tablet: "tablet",
  Mobile: "mobile",
} as const;
export type Device = (typeof Device)[keyof typeof Device] | (string & {});

export const deviceSchema: EnumSchema<Device> = s.enumOf<Device>(Device);
