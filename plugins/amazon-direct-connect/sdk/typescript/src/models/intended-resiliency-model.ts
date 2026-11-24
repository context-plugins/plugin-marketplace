import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The resiliency model that the resiliency group is intended to meet. The valid values are
 * maximum-resiliency, high-resiliency, and basic-resiliency.
 */
export const IntendedResiliencyModel = {
  MaximumResiliency: "maximum-resiliency",
  HighResiliency: "high-resiliency",
  BasicResiliency: "basic-resiliency",
} as const;
export type IntendedResiliencyModel =
  | (typeof IntendedResiliencyModel)[keyof typeof IntendedResiliencyModel]
  | (string & {});

export const intendedResiliencyModelSchema: EnumSchema<IntendedResiliencyModel> =
  s.enumOf<IntendedResiliencyModel>(IntendedResiliencyModel);
