import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Description of the organization. */
export type Description30 = string;

export const description30Schema: Schema<Description30> = s.of<Description30>(s.union([s.string()]));
