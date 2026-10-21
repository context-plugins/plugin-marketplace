import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant's URL to be displayed in a statement descriptor. */
export type Url1 = string;

export const url1Schema: Schema<Url1> = s.of<Url1>(s.union([s.string()]));
