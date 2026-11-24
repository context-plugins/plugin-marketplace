import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { moderationInputError1Schema, type ModerationInputError1 } from "../moderation-input-error1.js";
import {
  moderationInputModerationResultsSchema,
  type ModerationInputModerationResults,
} from "../moderation-input-moderation-results.js";

export type Input1 = ModerationInputModerationResults | ModerationInputError1;

export const input1Schema: Schema<Input1> = s.of<Input1>(
  s.union([s.lazy(() => moderationInputModerationResultsSchema), s.lazy(() => moderationInputError1Schema)]),
);
