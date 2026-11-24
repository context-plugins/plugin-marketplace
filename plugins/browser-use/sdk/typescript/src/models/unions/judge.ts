import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  runJudgeSettingsInternalSchema,
  runJudgeSettingsSchema,
  type RunJudgeSettings,
} from "../run-judge-settings.js";

export type Judge = RunJudgeSettings;

export const judgeInternalSchema: Schema<Judge> = s.of<Judge>(
  s.union([s.lazy(() => runJudgeSettingsInternalSchema)]),
);

export const judgeSchema: Schema<Judge> = s.lazySchema(() =>
  s.of<Judge>(s.union([s.lazy(() => runJudgeSettingsSchema)])),
);
