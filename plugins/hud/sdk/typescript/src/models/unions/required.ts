import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Required = boolean;

export const requiredSchema: Schema<Required> = s.of<Required>(s.union([s.boolean()]));
