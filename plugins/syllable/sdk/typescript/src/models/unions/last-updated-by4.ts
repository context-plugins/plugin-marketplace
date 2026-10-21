import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Email of the user who last updated the directory member */
export type LastUpdatedBy4 = string;

export const lastUpdatedBy4Schema: Schema<LastUpdatedBy4> = s.of<LastUpdatedBy4>(s.union([s.string()]));
