import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContactPointSortBy = {
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
} as const;
export type ContactPointSortBy = (typeof ContactPointSortBy)[keyof typeof ContactPointSortBy] | (string & {});

export const contactPointSortBySchema: EnumSchema<ContactPointSortBy> =
  s.enumOf<ContactPointSortBy>(ContactPointSortBy);
