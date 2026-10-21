import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { effort11Schema, type Effort11 } from "./unions/effort11.js";

export type ResponsesReasoningConfig = {
  /**
   * Constrains effort on reasoning for reasoning models. Currently supported values are `minimal`,
   * `low`, `medium`, `high`, `xhigh`, `max`, and `ultracode`. Reducing reasoning effort can result
   * in faster responses and fewer tokens used on reasoning in a response.
   */
  effort?: Effort11;
};

export const responsesReasoningConfigSchema: Schema<ResponsesReasoningConfig> =
  s.object<ResponsesReasoningConfig>({
    effort: s.optional(s.lazy(() => effort11Schema)),
  });
