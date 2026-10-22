import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Routes the request to a specific adapter. */
export type Model1 = string;

export const model1Schema: Schema<Model1> = s.of<Model1>(s.union([s.string()]));
