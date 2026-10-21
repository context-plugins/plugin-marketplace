import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { effort1Schema, type Effort1 } from "./unions/effort1.js";
import { formatSchema, type Format } from "./unions/format.js";

export type MessagesOutputConfig = {
  /**
   * Relative generation effort level. Higher effort can improve quality on harder prompts at the
   * cost of additional compute.
   */
  effort?: Effort1;
  /** Structured output settings. Currently supports only `json_schema`. */
  format?: Format;
};

export const messagesOutputConfigSchema: Schema<MessagesOutputConfig> = s.object<MessagesOutputConfig>({
  effort: s.optional(s.lazy(() => effort1Schema)),
  format: s.optional(s.lazy(() => formatSchema)),
});
