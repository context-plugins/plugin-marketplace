import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments explaining the deletion */
export type DeleteComments = string;

export const deleteCommentsSchema: Schema<DeleteComments> = s.of<DeleteComments>(s.union([s.string()]));
