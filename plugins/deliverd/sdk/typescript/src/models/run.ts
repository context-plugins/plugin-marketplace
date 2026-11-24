import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { releaseInternalSchema, releaseSchema, type Release } from "./release.js";

/** The run the results came from: { tool, runId?, name?, url?, release? } */
export type Run = {
  /** The tool that produced the results: promptfoo, inspect, garak, weave, … */
  tool: string;
  runId?: string;
  /** The run, task, experiment or evaluation name */
  name?: string;
  /** The run in the tool, for a reviewer to open */
  url?: string;
  startedAt?: string;
  /**
   * The release the run tested — any of provider, model, modelVersion, promptHash, guardrailsHash.
   * Evidence naming a release other than the one the AI system now runs does not count towards a
   * control
   */
  release?: Release;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const runProperties: s.Shape<Run> = {
  tool: s.string(),
  runId: s.optional(s.string()),
  name: s.optional(s.string()),
  url: s.optional(s.string()),
  startedAt: s.optional(s.string()),
  release: s.optional(s.lazy(() => releaseInternalSchema)),
};

export const runInternalSchema: Schema<Run> = s.object<Run>(runProperties, {
  additionalProperties: s.json(),
});

export const runSchema: Schema<Run> = s.lazySchema(() =>
  s.object<Run>(
    {
      ...runProperties,
      tool: s.string().check(s.minLength(1), s.maxLength(60)),
      runId: s.optional(s.string().check(s.maxLength(200))),
      name: s.optional(s.string().check(s.maxLength(200))),
      url: s.optional(s.string().check(s.maxLength(2000))),
      startedAt: s.optional(s.string().check(s.maxLength(40))),
      release: s.optional(s.lazy(() => releaseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
