import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The email of the user who most recently updated the organization */
export type LastUpdatedBy7 = string;

export const lastUpdatedBy7Schema: Schema<LastUpdatedBy7> = s.of<LastUpdatedBy7>(s.union([s.string()]));
