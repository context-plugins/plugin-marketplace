import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Description of campaign */
export type Description27 = string;

export const description27Schema: Schema<Description27> = s.of<Description27>(s.union([s.string()]));
