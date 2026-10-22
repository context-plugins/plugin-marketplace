import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Description of the bridge phrases config. */
export type Description11 = string;

export const description11Schema: Schema<Description11> = s.of<Description11>(s.union([s.string()]));
