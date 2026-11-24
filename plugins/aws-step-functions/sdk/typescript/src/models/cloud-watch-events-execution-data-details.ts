import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudWatchEventsExecutionDataDetails = {
  /** Indicates whether input or output was included in the response. Always true for API calls. */
  included?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudWatchEventsExecutionDataDetailsSchema: Schema<CloudWatchEventsExecutionDataDetails> =
  s.object<CloudWatchEventsExecutionDataDetails>(
    {
      included: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
