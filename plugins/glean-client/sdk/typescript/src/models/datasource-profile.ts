import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DatasourceProfile = {
  /** The datasource the profile is of. */
  datasource: string;
  /** The display name of the entity in the given datasource. */
  handle: string;
  /** URL to view the entity's profile. */
  url?: string;
  /**
   * A deep link, if available, into the datasource's native application for the entity's platform
   * (i.e. slack://...).
   */
  nativeAppUrl?: string;
  /**
   * For internal use only. True iff the data source profile was manually added by a user from
   * within Glean (aka not from the original data source)
   */
  isUserGenerated?: boolean;
};

export const datasourceProfileSchema: Schema<DatasourceProfile> = s.object<DatasourceProfile>({
  datasource: s.string(),
  handle: s.string(),
  url: s.optional(s.string()),
  nativeAppUrl: s.optional(s.string()),
  isUserGenerated: s.optional(s.boolean()),
});
