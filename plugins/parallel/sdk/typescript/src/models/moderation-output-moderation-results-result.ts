import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A moderation result produced for the response input or output. */
export type ModerationOutputModerationResultsResult = {
  categories: Record<string, boolean>;
  categoryAppliedInputTypes: Record<string, unknown>;
  categoryScores: Record<string, number>;
  flagged: boolean;
  model: string;
  /** @default "moderation_result" */
  type?: "moderation_result";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const moderationOutputModerationResultsResultSchema: Schema<ModerationOutputModerationResultsResult> =
  s.object<ModerationOutputModerationResultsResult>(
    {
      categories: s.record(s.string(), s.boolean()),
      categoryAppliedInputTypes: s.record(s.string(), s.unknown()),
      categoryScores: s.record(s.string(), s.float64()),
      flagged: s.boolean(),
      model: s.string(),
      type: s.defaulted(s.literal("moderation_result"), "moderation_result"),
      _keysMap: {
        categoryAppliedInputTypes: "category_applied_input_types",
        categoryScores: "category_scores",
      },
    },
    { additionalProperties: s.json() },
  );
