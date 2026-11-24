import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ReasoningContent = string;

export const reasoningContentSchema: Schema<ReasoningContent> = s.of<ReasoningContent>(s.union([s.string()]));
