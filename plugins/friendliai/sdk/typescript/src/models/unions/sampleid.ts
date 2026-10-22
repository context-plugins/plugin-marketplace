import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Sampleid = string | number;

export const sampleidSchema: Schema<Sampleid> = s.of<Sampleid>(s.union([s.string(), s.int()]));
