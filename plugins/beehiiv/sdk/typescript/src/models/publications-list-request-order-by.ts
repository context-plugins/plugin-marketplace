import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicationsListRequestOrderBy = {
  Created: "created",
  Name: "name",
} as const;
export type PublicationsListRequestOrderBy =
  | (typeof PublicationsListRequestOrderBy)[keyof typeof PublicationsListRequestOrderBy]
  | (string & {});

export const publicationsListRequestOrderBySchema: EnumSchema<PublicationsListRequestOrderBy> =
  s.enumOf<PublicationsListRequestOrderBy>(PublicationsListRequestOrderBy);
