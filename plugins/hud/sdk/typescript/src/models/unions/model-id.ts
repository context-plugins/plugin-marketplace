import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ModelId = string;

export const modelIdSchema: Schema<ModelId> = s.of<ModelId>(s.union([s.string()]));
