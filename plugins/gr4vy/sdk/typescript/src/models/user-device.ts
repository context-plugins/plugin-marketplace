import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The platform that is being used to access the website. */
export const UserDevice = {
  Desktop: "desktop",
  Mobile: "mobile",
} as const;
export type UserDevice = (typeof UserDevice)[keyof typeof UserDevice] | (string & {});

export const userDeviceSchema: EnumSchema<UserDevice> = s.enumOf<UserDevice>(UserDevice);
