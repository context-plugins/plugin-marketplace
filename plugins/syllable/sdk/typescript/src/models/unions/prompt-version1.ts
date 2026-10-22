import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Legacy prompt version timestamp used by the agent with which the session occurred */
export type PromptVersion1 = string;

export const promptVersion1Schema: Schema<PromptVersion1> = s.of<PromptVersion1>(s.union([s.string()]));
