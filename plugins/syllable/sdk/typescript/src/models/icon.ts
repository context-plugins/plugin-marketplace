import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Icon = {
  Phone: "phone",
  Email: "email",
  Chat: "chat",
  Calendar: "calendar",
  Arrow: "arrow",
} as const;
export type Icon = (typeof Icon)[keyof typeof Icon] | (string & {});

export const iconSchema: EnumSchema<Icon> = s.enumOf<Icon>(Icon);
