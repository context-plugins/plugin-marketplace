import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comment for the new version. */
export type NewVersionComment = string;

export const newVersionCommentSchema: Schema<NewVersionComment> = s.of<NewVersionComment>(
  s.union([s.string()]),
);
