import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ILIKE-match on name */
export type SearchHudPlatformRegistryApi = string;

export const searchHudPlatformRegistryApiSchema: Schema<SearchHudPlatformRegistryApi> =
  s.of<SearchHudPlatformRegistryApi>(s.union([s.string()]));
