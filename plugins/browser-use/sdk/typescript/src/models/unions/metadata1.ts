import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Only browsers tagged with every one of these terms. `key` matches any value; `key=value` matches
 * exactly. Repeat the param to require more than one (AND).
 */
export type Metadata1 = string[];

export const metadata1Schema: Schema<Metadata1> = s.of<Metadata1>(s.union([s.array(s.string())]));
