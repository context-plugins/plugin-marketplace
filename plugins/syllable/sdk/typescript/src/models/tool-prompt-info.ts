import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about a prompt linked to a tool. */
export type ToolPromptInfo = {
  /** The ID of the prompt */
  id: number;
  /** The name of the prompt */
  name: string;
};

export const toolPromptInfoSchema: Schema<ToolPromptInfo> = s.object<ToolPromptInfo>({
  id: s.int(),
  name: s.string(),
});
