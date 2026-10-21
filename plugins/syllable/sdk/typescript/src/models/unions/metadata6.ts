import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Metadata6 = string[];

export const metadata6Schema: Schema<Metadata6> = s.of<Metadata6>(s.union([s.array(s.string())]));
