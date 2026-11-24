import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ModelName = string;

export const modelNameSchema: Schema<ModelName> = s.of<ModelName>(s.union([s.string()]));
