import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The description of the parameter. */
export type Description6 = string;

export const description6Schema: Schema<Description6> = s.of<Description6>(s.union([s.string()]));
