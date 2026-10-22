import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The description of the data source. */
export type Description14 = string;

export const description14Schema: Schema<Description14> = s.of<Description14>(s.union([s.string()]));
