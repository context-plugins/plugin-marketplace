import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scenarioArgumentSchema, type ScenarioArgument } from "./scenario-argument.js";

export type TraceScenarioRef = {
  id: string;
  name: string;
  registryId: string;
  arguments: ScenarioArgument[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceScenarioRefSchema: Schema<TraceScenarioRef> = s.object<TraceScenarioRef>(
  {
    id: s.string(),
    name: s.string(),
    registryId: s.string(),
    arguments: s.array(s.lazy(() => scenarioArgumentSchema)),
    _keysMap: {
      registryId: "registry_id",
    },
  },
  { additionalProperties: s.json() },
);
