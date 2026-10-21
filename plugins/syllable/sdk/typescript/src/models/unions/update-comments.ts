import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments about the update */
export type UpdateComments = string;

export const updateCommentsSchema: Schema<UpdateComments> = s.of<UpdateComments>(s.union([s.string()]));
