import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SelectedModel = string;

export const selectedModelSchema: Schema<SelectedModel> = s.of<SelectedModel>(s.union([s.string()]));
