import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runTimeoutSInternalSchema, runTimeoutSSchema, type RunTimeoutS } from "./unions/run-timeout-s.js";
import {
  startupTimeoutSInternalSchema,
  startupTimeoutSSchema,
  type StartupTimeoutS,
} from "./unions/startup-timeout-s.js";

/** Wire-compatible subset of ``hud.eval.runtime.RuntimeLimits``. */
export type SubmittedRuntimeLimits = {
  startupTimeoutS?: StartupTimeoutS;
  runTimeoutS?: RunTimeoutS;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const submittedRuntimeLimitsProperties: s.Shape<SubmittedRuntimeLimits> = {
  startupTimeoutS: s.optional(s.lazy(() => startupTimeoutSInternalSchema)),
  runTimeoutS: s.optional(s.lazy(() => runTimeoutSInternalSchema)),
  _keysMap: {
    startupTimeoutS: "startup_timeout_s",
    runTimeoutS: "run_timeout_s",
  },
};

export const submittedRuntimeLimitsInternalSchema: Schema<SubmittedRuntimeLimits> =
  s.object<SubmittedRuntimeLimits>(submittedRuntimeLimitsProperties, { additionalProperties: s.json() });

export const submittedRuntimeLimitsSchema: Schema<SubmittedRuntimeLimits> = s.lazySchema(() =>
  s.object<SubmittedRuntimeLimits>(
    {
      ...submittedRuntimeLimitsProperties,
      startupTimeoutS: s.optional(s.lazy(() => startupTimeoutSSchema)),
      runTimeoutS: s.optional(s.lazy(() => runTimeoutSSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
