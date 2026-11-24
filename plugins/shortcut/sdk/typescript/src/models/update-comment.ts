import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateComment = {
  /** The updated comment text. */
  text: string;
};

export const updateCommentSchema: Schema<UpdateComment> = s.object<UpdateComment>({
  text: s.string(),
});
