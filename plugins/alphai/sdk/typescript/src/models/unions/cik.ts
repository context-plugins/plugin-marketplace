import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Cik = number;

export const cikSchema: Schema<Cik> = s.of<Cik>(s.union([s.int()]));
