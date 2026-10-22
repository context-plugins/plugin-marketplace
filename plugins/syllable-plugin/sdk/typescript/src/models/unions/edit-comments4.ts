import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The comments for the most recent edit to the data source */
export type EditComments4 = string;

export const editComments4Schema: Schema<EditComments4> = s.of<EditComments4>(s.union([s.string()]));
