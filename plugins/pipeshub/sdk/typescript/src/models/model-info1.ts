import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ModelInfo1 = {
  modelKey?: string;
  modelName?: string;
  modelFriendlyName?: string;
  modelProvider?: string;
  chatMode?: string;
};

export const modelInfo1Schema: Schema<ModelInfo1> = s.object<ModelInfo1>({
  modelKey: s.optional(s.string()),
  modelName: s.optional(s.string()),
  modelFriendlyName: s.optional(s.string()),
  modelProvider: s.optional(s.string()),
  chatMode: s.optional(s.string()),
});
