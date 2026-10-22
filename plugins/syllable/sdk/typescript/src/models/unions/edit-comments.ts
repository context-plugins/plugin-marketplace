import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The comments for the most recent edit to the prompt */
export type EditComments = string;

export const editCommentsSchema: Schema<EditComments> = s.of<EditComments>(s.union([s.string()]));
