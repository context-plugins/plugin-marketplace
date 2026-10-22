import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AI model configuration used */
export type ModelInfo = {
  modelKey?: string;
  modelName?: string;
  /** Friendly display name of the selected model */
  modelFriendlyName?: string;
  modelProvider?: string;
  chatMode?: string;
};

export const modelInfoSchema: Schema<ModelInfo> = s.object<ModelInfo>({
  modelKey: s.optional(s.string()),
  modelName: s.optional(s.string()),
  modelFriendlyName: s.optional(s.string()),
  modelProvider: s.optional(s.string()),
  chatMode: s.optional(s.string()),
});
