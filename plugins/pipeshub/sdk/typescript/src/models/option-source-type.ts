import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** `dynamic` options come from GET /connectors/{connectorId}/filters/{filterKey}/options */
export const OptionSourceType = {
  Manual: "manual",
  Static: "static",
  Dynamic: "dynamic",
} as const;
export type OptionSourceType = (typeof OptionSourceType)[keyof typeof OptionSourceType] | (string & {});

export const optionSourceTypeSchema: EnumSchema<OptionSourceType> =
  s.enumOf<OptionSourceType>(OptionSourceType);
