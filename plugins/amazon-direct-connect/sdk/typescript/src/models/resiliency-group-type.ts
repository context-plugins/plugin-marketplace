import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the resiliency group. The valid value is Managed. */
export const ResiliencyGroupType = {
  Managed: "Managed",
} as const;
export type ResiliencyGroupType =
  | (typeof ResiliencyGroupType)[keyof typeof ResiliencyGroupType]
  | (string & {});

export const resiliencyGroupTypeSchema: EnumSchema<ResiliencyGroupType> =
  s.enumOf<ResiliencyGroupType>(ResiliencyGroupType);
