import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  moderationOutputModerationResultsResultSchema,
  type ModerationOutputModerationResultsResult,
} from "./moderation-output-moderation-results-result.js";

/** Successful moderation results for the request input or generated output. */
export type ModerationOutputModerationResults = {
  model: string;
  results: ModerationOutputModerationResultsResult[];
  /** @default "moderation_results" */
  type?: "moderation_results";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const moderationOutputModerationResultsSchema: Schema<ModerationOutputModerationResults> =
  s.object<ModerationOutputModerationResults>(
    {
      model: s.string(),
      results: s.array(s.lazy(() => moderationOutputModerationResultsResultSchema)),
      type: s.defaulted(s.literal("moderation_results"), "moderation_results"),
    },
    { additionalProperties: s.json() },
  );
