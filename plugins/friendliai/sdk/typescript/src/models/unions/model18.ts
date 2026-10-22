import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Model used to generate the response. */
export type Model18 = string;

export const model18Schema: Schema<Model18> = s.of<Model18>(s.union([s.string()]));
