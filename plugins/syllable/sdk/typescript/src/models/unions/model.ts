import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Model = string;

export const modelSchema: Schema<Model> = s.of<Model>(s.union([s.string()]));
