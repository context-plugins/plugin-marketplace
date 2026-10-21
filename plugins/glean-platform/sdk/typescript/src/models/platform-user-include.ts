import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An optional field group to add to each user. */
export const PlatformUserInclude = {
  DatasourceProfiles: "DATASOURCE_PROFILES",
} as const;
export type PlatformUserInclude =
  | (typeof PlatformUserInclude)[keyof typeof PlatformUserInclude]
  | (string & {});

export const platformUserIncludeSchema: EnumSchema<PlatformUserInclude> =
  s.enumOf<PlatformUserInclude>(PlatformUserInclude);
