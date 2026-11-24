import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** App health response. */
export type HealthCheckDto = {
  /** Health status */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const healthCheckDtoSchema: Schema<HealthCheckDto> = s.object<HealthCheckDto>(
  {
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
