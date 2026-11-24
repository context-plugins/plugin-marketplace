import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contextInternalSchema, contextSchema, type Context } from "./unions/context.js";

/**
 * Opt-in LLM judgement of the finished run. Presence of this object turns the judge on (send {} for
 * defaults); CP judges the run's trajectory after it goes terminal and surfaces the verdict as
 * RunSummary.judgement (null until it lands). The judge's LLM call is billed to the run.
 */
export type RunJudgeSettings = {
  context?: Context;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const runJudgeSettingsProperties: s.Shape<RunJudgeSettings> = {
  context: s.optional(s.lazy(() => contextInternalSchema)),
};

export const runJudgeSettingsInternalSchema: Schema<RunJudgeSettings> = s.object<RunJudgeSettings>(
  runJudgeSettingsProperties,
  { additionalProperties: s.json() },
);

export const runJudgeSettingsSchema: Schema<RunJudgeSettings> = s.lazySchema(() =>
  s.object<RunJudgeSettings>(
    {
      ...runJudgeSettingsProperties,
      context: s.optional(s.lazy(() => contextSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
