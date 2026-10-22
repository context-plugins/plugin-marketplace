import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments for the most recent edit to the language group. */
export type EditComments1 = string;

export const editComments1Schema: Schema<EditComments1> = s.of<EditComments1>(s.union([s.string()]));
