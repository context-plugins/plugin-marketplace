import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runnerSchema, type Runner } from "./runner.js";

export type RunnerResponse = {
  /** List of runners */
  items?: Runner[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runnerResponseSchema: Schema<RunnerResponse> = s.object<RunnerResponse>(
  {
    items: s.optional(s.array(s.lazy(() => runnerSchema))),
  },
  { additionalProperties: s.json() },
);
