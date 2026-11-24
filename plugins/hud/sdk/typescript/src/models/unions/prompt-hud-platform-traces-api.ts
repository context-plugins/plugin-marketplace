import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PromptHudPlatformTracesApi = string;

export const promptHudPlatformTracesApiSchema: Schema<PromptHudPlatformTracesApi> =
  s.of<PromptHudPlatformTracesApi>(s.union([s.string()]));
