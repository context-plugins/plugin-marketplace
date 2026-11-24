import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Checks = string[];

export const checksSchema: Schema<Checks> = s.of<Checks>(s.union([s.array(s.string())]));
