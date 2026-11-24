import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sub type of this filter */
export const SubType = {
  UserId: "user_id",
  Email: "email",
  Platform: "platform",
  DeviceModel: "deviceModel",
} as const;
export type SubType = (typeof SubType)[keyof typeof SubType] | (string & {});

export const subTypeSchema: EnumSchema<SubType> = s.enumOf<SubType>(SubType);
