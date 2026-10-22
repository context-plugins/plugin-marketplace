import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Email of the user who last updated the agent */
export type LastUpdatedBy = string;

export const lastUpdatedBySchema: Schema<LastUpdatedBy> = s.of<LastUpdatedBy>(s.union([s.string()]));
