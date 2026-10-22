import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SelectedProvider = string;

export const selectedProviderSchema: Schema<SelectedProvider> = s.of<SelectedProvider>(s.union([s.string()]));
