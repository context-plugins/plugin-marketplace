import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Overrides the default report group to pass to the Worldpay VAP API. */
export type Reportgroup = string;

export const reportgroupSchema: Schema<Reportgroup> = s.of<Reportgroup>(s.union([s.string()]));
