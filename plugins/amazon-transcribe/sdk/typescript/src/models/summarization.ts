import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Summarization = {
  /**
   * Enables Generative call summarization in your Call Analytics request Generative call
   * summarization provides a summary of the transcript including important components discussed in
   * the conversation. For more information, see Enabling generative call summarization.
   */
  generateAbstractiveSummary: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarizationSchema: Schema<Summarization> = s.object<Summarization>(
  {
    generateAbstractiveSummary: s.boolean(),
    _keysMap: {
      generateAbstractiveSummary: "GenerateAbstractiveSummary",
    },
  },
  { additionalProperties: s.json() },
);
