import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Listing API to use for discovering objects. When not specified, Transfer Service will attempt
 * to determine the right API to use.
 */
export const ListApi = {
  ListApiUnspecified: "LIST_API_UNSPECIFIED",
  ListObjectsV2: "LIST_OBJECTS_V2",
  ListObjects: "LIST_OBJECTS",
} as const;
export type ListApi = (typeof ListApi)[keyof typeof ListApi] | (string & {});

export const listApiSchema: EnumSchema<ListApi> = s.enumOf<ListApi>(ListApi);
