import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters the results to only include transactions that were authorized (1) or declined (0). */
export type Authorized = string[];

export const authorizedSchema: Schema<Authorized> = s.of<Authorized>(s.union([s.array(s.string())]));
