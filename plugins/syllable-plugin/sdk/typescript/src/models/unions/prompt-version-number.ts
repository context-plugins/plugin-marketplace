import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Optional pin to a specific version of the prompt (prompt history version number). When omitted or
 * null, the agent tracks the latest/current version of the prompt. When set, the agent runs that
 * specific prompt version. Must reference an existing version of the agent's prompt.
 */
export type PromptVersionNumber = number;

export const promptVersionNumberSchema: Schema<PromptVersionNumber> = s.of<PromptVersionNumber>(
  s.union([s.int()]),
);
