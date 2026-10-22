import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 8601 UTC hour (YYYY-MM-DDTHH:00:00Z). */
export type DeprecationDate1 = string;

export const deprecationDate1Schema: Schema<DeprecationDate1> = s.of<DeprecationDate1>(s.union([s.string()]));
