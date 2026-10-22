import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Detail about the 3DS error. */
export type Detail = string;

export const detailSchema: Schema<Detail> = s.of<Detail>(s.union([s.string()]));
