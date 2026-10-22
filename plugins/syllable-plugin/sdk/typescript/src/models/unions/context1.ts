import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The prompt text that will be sent to the LLM at the beginning of the conversation */
export type Context1 = string;

export const context1Schema: Schema<Context1> = s.of<Context1>(s.union([s.string()]));
