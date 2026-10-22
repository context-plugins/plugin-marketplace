import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolPromptInfoSchema, type ToolPromptInfo } from "../tool-prompt-info.js";

/** IDs and names of the prompts linked to the tool */
export type PromptsInfo = ToolPromptInfo[];

export const promptsInfoSchema: Schema<PromptsInfo> = s.of<PromptsInfo>(
  s.union([s.array(s.lazy(() => toolPromptInfoSchema))]),
);
