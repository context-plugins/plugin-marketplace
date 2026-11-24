import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  moderationInputModerationResultsResultSchema,
  type ModerationInputModerationResultsResult,
} from "./moderation-input-moderation-results-result.js";

/** Successful moderation results for the request input or generated output. */
export type ModerationInputModerationResults = {
  model: string;
  results: ModerationInputModerationResultsResult[];
  /** @default "moderation_results" */
  type?: "moderation_results";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const moderationInputModerationResultsSchema: Schema<ModerationInputModerationResults> =
  s.object<ModerationInputModerationResults>(
    {
      model: s.string(),
      results: s.array(s.lazy(() => moderationInputModerationResultsResultSchema)),
      type: s.defaulted(s.literal("moderation_results"), "moderation_results"),
    },
    { additionalProperties: s.json() },
  );
