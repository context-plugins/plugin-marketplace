import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Rows dropped. Null when the cost could not be measured — see `unavailable`. */
export type Grants = number;

export const grantsSchema: Schema<Grants> = s.of<Grants>(s.union([s.int()]));
