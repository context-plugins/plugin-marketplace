import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The comment for the initial version. */
export type InitialVersionComment = string;

export const initialVersionCommentSchema: Schema<InitialVersionComment> = s.of<InitialVersionComment>(
  s.union([s.string()]),
);
