import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dynatraceEnvironmentSchema, type DynatraceEnvironment } from "./dynatrace-environment.js";

export type DynatraceIntegration = {
  environments: DynatraceEnvironment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dynatraceIntegrationSchema: Schema<DynatraceIntegration> = s.object<DynatraceIntegration>(
  {
    environments: s.array(s.lazy(() => dynatraceEnvironmentSchema)),
  },
  { additionalProperties: s.json() },
);
