import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { moderationInputErrorSchema, type ModerationInputError } from "../moderation-input-error.js";
import {
  moderationInputModerationResultSchema,
  type ModerationInputModerationResult,
} from "../moderation-input-moderation-result.js";

export type Input = ModerationInputModerationResult | ModerationInputError;

export const inputSchema: Schema<Input> = s.of<Input>(
  s.union([s.lazy(() => moderationInputModerationResultSchema), s.lazy(() => moderationInputErrorSchema)]),
);
