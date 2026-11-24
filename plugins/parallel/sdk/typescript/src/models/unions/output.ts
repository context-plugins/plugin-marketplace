import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { moderationOutputErrorSchema, type ModerationOutputError } from "../moderation-output-error.js";
import {
  moderationOutputModerationResultSchema,
  type ModerationOutputModerationResult,
} from "../moderation-output-moderation-result.js";

export type Output = ModerationOutputModerationResult | ModerationOutputError;

export const outputSchema: Schema<Output> = s.of<Output>(
  s.union([s.lazy(() => moderationOutputModerationResultSchema), s.lazy(() => moderationOutputErrorSchema)]),
);
