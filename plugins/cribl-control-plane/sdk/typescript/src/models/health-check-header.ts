import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HealthCheckHeader = {
  /** Header Name */
  name: string;
  /** JavaScript expression to compute the header value (can be a constant). */
  value: string;
};

export const healthCheckHeaderSchema: Schema<HealthCheckHeader> = s.object<HealthCheckHeader>({
  name: s.string(),
  value: s.string(),
});
