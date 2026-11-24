import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effort1Schema, type Effort1 } from "./unions/effort1.js";

/** Reasoning configuration (OpenAI-compatible subset). */
export type ResponseReasoningConfig = {
  /**
   * Controls how much research is performed, trading response time for answer quality. Defaults to
   * `medium` when omitted.
   */
  effort?: Effort1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseReasoningConfigSchema: Schema<ResponseReasoningConfig> =
  s.object<ResponseReasoningConfig>(
    {
      effort: s.optional(s.lazy(() => effort1Schema)),
    },
    { additionalProperties: s.json() },
  );
