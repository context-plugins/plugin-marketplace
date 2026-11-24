import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scenarioSchema, type Scenario } from "./scenario.js";

/** Optional. Autotuning configuration of the workload. */
export type AutotuningConfig2 = {
  /** Optional. Scenarios for which tunings are applied. */
  scenarios?: Scenario[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const autotuningConfig2Schema: Schema<AutotuningConfig2> = s.object<AutotuningConfig2>(
  {
    scenarios: s.optional(s.array(s.lazy(() => scenarioSchema))),
  },
  { additionalProperties: s.json() },
);
