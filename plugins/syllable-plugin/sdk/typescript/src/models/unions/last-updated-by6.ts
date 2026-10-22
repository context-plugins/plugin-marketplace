import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The email address of the user who last updated the user */
export type LastUpdatedBy6 = string;

export const lastUpdatedBy6Schema: Schema<LastUpdatedBy6> = s.of<LastUpdatedBy6>(s.union([s.string()]));
