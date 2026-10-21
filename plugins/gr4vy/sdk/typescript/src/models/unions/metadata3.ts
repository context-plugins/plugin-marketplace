import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that have the specified metadata. The metadata
 * should be in JSON format and contain a single key-value pair.
 */
export type Metadata3 = string[];

export const metadata3Schema: Schema<Metadata3> = s.of<Metadata3>(s.union([s.array(s.string())]));
