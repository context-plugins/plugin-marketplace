import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatZeroStateSuggestionOptions = {
  /**
   * The Chat Application ID this feed request should be scoped to. Empty means there is no Chat
   * Application ID..
   */
  applicationId?: string;
};

export const chatZeroStateSuggestionOptionsSchema: Schema<ChatZeroStateSuggestionOptions> =
  s.object<ChatZeroStateSuggestionOptions>({
    applicationId: s.optional(s.string()),
  });
