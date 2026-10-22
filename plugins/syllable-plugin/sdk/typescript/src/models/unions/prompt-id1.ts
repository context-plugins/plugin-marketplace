import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the prompt used by the agent with which the session occurred */
export type PromptId1 = string;

export const promptId1Schema: Schema<PromptId1> = s.of<PromptId1>(s.union([s.string()]));
