import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The description of the tool. */
export type Description4 = string;

export const description4Schema: Schema<Description4> = s.of<Description4>(s.union([s.string()]));
