import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executionConfig2Schema, type ExecutionConfig2 } from "./execution-config2.js";
import { peripheralsConfig2Schema, type PeripheralsConfig2 } from "./peripherals-config2.js";

/** Optional. Environment configuration for the session execution. */
export type EnvironmentConfig2 = {
  /** Optional. Execution configuration for a workload. */
  executionConfig?: ExecutionConfig2;
  /** Optional. Peripherals configuration that workload has access to. */
  peripheralsConfig?: PeripheralsConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentConfig2Schema: Schema<EnvironmentConfig2> = s.object<EnvironmentConfig2>(
  {
    executionConfig: s.optional(s.lazy(() => executionConfig2Schema)),
    peripheralsConfig: s.optional(s.lazy(() => peripheralsConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
