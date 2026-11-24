import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SystemPrompt = string;

export const systemPromptSchema: Schema<SystemPrompt> = s.of<SystemPrompt>(s.union([s.string()]));
