import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserGeneratedContentId = {
  /** The opaque id of the user generated content. */
  id?: number;
};

export const userGeneratedContentIdSchema: Schema<UserGeneratedContentId> = s.object<UserGeneratedContentId>({
  id: s.optional(s.int()),
});
