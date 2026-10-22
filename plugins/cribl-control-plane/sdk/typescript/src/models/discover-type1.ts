import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines how task discovery will be performed. Each entry returned by the Discover operation will
 * result in a Collect task.
 */
export const DiscoverType1 = {
  Http: "http",
  Json: "json",
  List: "list",
  None: "none",
} as const;
export type DiscoverType1 = (typeof DiscoverType1)[keyof typeof DiscoverType1] | (string & {});

export const discoverType1Schema: EnumSchema<DiscoverType1> = s.enumOf<DiscoverType1>(DiscoverType1);
