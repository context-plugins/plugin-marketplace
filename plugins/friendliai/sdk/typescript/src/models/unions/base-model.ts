import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Canonical model identifier from models.dev (e.g. `zhipuai/glm-5.3`). */
export type BaseModel = string;

export const baseModelSchema: Schema<BaseModel> = s.of<BaseModel>(s.union([s.string()]));
