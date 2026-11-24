import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PostOrderBy = {
  Created: "created",
  PublishDate: "publish_date",
  DisplayedDate: "displayed_date",
} as const;
export type PostOrderBy = (typeof PostOrderBy)[keyof typeof PostOrderBy] | (string & {});

export const postOrderBySchema: EnumSchema<PostOrderBy> = s.enumOf<PostOrderBy>(PostOrderBy);
