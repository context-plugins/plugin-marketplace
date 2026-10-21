import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines how task discovery will be performed. Use None to skip the discovery. Use HTTP Request to
 * make a REST call to discover tasks. Use Item List to enumerate items for collect to retrieve. Use
 * JSON Response to manually define discover tasks as a JSON array of objects. Each entry returned
 * by the discover operation will result in a collect task.
 */
export const DiscoverType = {
  Http: "http",
  Json: "json",
  List: "list",
  None: "none",
} as const;
export type DiscoverType = (typeof DiscoverType)[keyof typeof DiscoverType] | (string & {});

export const discoverTypeSchema: EnumSchema<DiscoverType> = s.enumOf<DiscoverType>(DiscoverType);
