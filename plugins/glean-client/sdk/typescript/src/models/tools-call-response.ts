import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ToolsCallResponse = {
  /** The raw response from the tool */
  rawResponse?: Record<string, unknown>;
  /** The error message if applicable */
  error?: string;
};

export const toolsCallResponseSchema: Schema<ToolsCallResponse> = s.object<ToolsCallResponse>({
  rawResponse: s.optional(s.record(s.string(), s.unknown())),
  error: s.optional(s.string()),
});
