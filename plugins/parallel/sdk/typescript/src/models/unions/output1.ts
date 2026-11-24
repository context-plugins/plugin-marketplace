import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { moderationOutputError1Schema, type ModerationOutputError1 } from "../moderation-output-error1.js";
import {
  moderationOutputModerationResultsSchema,
  type ModerationOutputModerationResults,
} from "../moderation-output-moderation-results.js";

export type Output1 = ModerationOutputModerationResults | ModerationOutputError1;

export const output1Schema: Schema<Output1> = s.of<Output1>(
  s.union([
    s.lazy(() => moderationOutputModerationResultsSchema),
    s.lazy(() => moderationOutputError1Schema),
  ]),
);
