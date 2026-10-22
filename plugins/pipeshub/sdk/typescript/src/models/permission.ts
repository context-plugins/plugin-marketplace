import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Permission = {
  Owner: "OWNER",
  Writer: "WRITER",
  Reader: "READER",
} as const;
export type Permission = (typeof Permission)[keyof typeof Permission] | (string & {});

export const permissionSchema: EnumSchema<Permission> = s.enumOf<Permission>(Permission);
