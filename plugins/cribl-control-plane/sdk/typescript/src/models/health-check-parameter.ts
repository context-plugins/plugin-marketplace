import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HealthCheckParameter = {
  /** Parameter name */
  name: string;
  /** JavaScript expression to compute the parameter value (can be a constant). */
  value: string;
};

export const healthCheckParameterSchema: Schema<HealthCheckParameter> = s.object<HealthCheckParameter>({
  name: s.string(),
  value: s.string(),
});
