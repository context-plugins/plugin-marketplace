import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endToEndResult2Schema, type EndToEndResult2 } from "./end-to-end-result2.js";

export type ConversationLevelTestResultsFilterBy = {
  /**
   * The selection of matched or mismatched end-to-end status to filter test set results data at the
   * conversation level.
   */
  endToEndResult?: EndToEndResult2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLevelTestResultsFilterBySchema: Schema<ConversationLevelTestResultsFilterBy> =
  s.object<ConversationLevelTestResultsFilterBy>(
    {
      endToEndResult: s.optional(s.lazy(() => endToEndResult2Schema)),
    },
    { additionalProperties: s.json() },
  );
