import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Email of the user who last updated the data source */
export type LastUpdatedBy2 = string;

export const lastUpdatedBy2Schema: Schema<LastUpdatedBy2> = s.of<LastUpdatedBy2>(s.union([s.string()]));
