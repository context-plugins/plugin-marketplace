import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments for the most recent edit. */
export type EditComments2 = string;

export const editComments2Schema: Schema<EditComments2> = s.of<EditComments2>(s.union([s.string()]));
