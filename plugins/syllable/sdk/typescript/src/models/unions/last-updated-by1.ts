import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Email address of the user who most recently updated the prompt */
export type LastUpdatedBy1 = string;

export const lastUpdatedBy1Schema: Schema<LastUpdatedBy1> = s.of<LastUpdatedBy1>(s.union([s.string()]));
