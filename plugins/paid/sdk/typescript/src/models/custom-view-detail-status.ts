import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomViewDetailStatus = {
  Draft: "DRAFT",
  Published: "PUBLISHED",
} as const;
export type CustomViewDetailStatus =
  | (typeof CustomViewDetailStatus)[keyof typeof CustomViewDetailStatus]
  | (string & {});

export const customViewDetailStatusSchema: EnumSchema<CustomViewDetailStatus> =
  s.enumOf<CustomViewDetailStatus>(CustomViewDetailStatus);
