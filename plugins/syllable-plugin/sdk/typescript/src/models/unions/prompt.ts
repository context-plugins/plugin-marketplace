import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { promptResponseSchema, type PromptResponse } from "../prompt-response.js";

/** The prompt associated with the agent. */
export type Prompt = PromptResponse;

export const promptSchema: Schema<Prompt> = s.of<Prompt>(s.union([s.lazy(() => promptResponseSchema)]));
