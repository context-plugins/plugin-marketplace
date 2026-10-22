import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The email of the user who last updated the incident */
export type LastUpdatedBy5 = string;

export const lastUpdatedBy5Schema: Schema<LastUpdatedBy5> = s.of<LastUpdatedBy5>(s.union([s.string()]));
