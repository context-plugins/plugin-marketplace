import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messagesOutputConfigSchema, type MessagesOutputConfig } from "../messages-output-config.js";

/** Output generation options including effort level and structured output format settings. */
export type OutputConfig = MessagesOutputConfig;

export const outputConfigSchema: Schema<OutputConfig> = s.of<OutputConfig>(
  s.union([s.lazy(() => messagesOutputConfigSchema)]),
);
