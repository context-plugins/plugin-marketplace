import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TaskPrompt = string;

export const taskPromptSchema: Schema<TaskPrompt> = s.of<TaskPrompt>(s.union([s.string()]));
