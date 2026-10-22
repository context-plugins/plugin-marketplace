import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** End datetime for filtering results */
export type EndDatetime29 = string;

export const endDatetime29Schema: Schema<EndDatetime29> = s.of<EndDatetime29>(s.union([s.string()]));
