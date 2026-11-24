import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateStoryComment = {
  /** The updated comment text. */
  text: string;
};

const updateStoryCommentProperties: s.Shape<UpdateStoryComment> = {
  text: s.string(),
};

export const updateStoryCommentInternalSchema: Schema<UpdateStoryComment> = s.object<UpdateStoryComment>(
  updateStoryCommentProperties,
);

export const updateStoryCommentSchema: Schema<UpdateStoryComment> = s.lazySchema(() =>
  s.object<UpdateStoryComment>({
    ...updateStoryCommentProperties,
    text: s.string().check(s.maxLength(100000)),
  }),
);
