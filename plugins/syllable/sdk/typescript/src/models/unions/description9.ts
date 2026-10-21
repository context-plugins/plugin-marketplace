import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Description of the organization */
export type Description9 = string;

export const description9Schema: Schema<Description9> = s.of<Description9>(s.union([s.string()]));
