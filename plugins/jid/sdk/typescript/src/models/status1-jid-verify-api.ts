import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1JidVerifyApi = {
  Active: "active",
  Attention: "attention",
  Inactive: "inactive",
  Unknown: "unknown",
} as const;
export type Status1JidVerifyApi =
  | (typeof Status1JidVerifyApi)[keyof typeof Status1JidVerifyApi]
  | (string & {});

export const status1JidVerifyApiSchema: EnumSchema<Status1JidVerifyApi> =
  s.enumOf<Status1JidVerifyApi>(Status1JidVerifyApi);
