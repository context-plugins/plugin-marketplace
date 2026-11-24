import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EmployeesByLocation = {
  /** Country name */
  country?: string;
  /** State or region (null when not available) */
  state?: string | null;
  /** Number of employees in this location */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const employeesByLocationSchema: Schema<EmployeesByLocation> = s.object<EmployeesByLocation>(
  {
    country: s.optional(s.string()),
    state: s.optionalNullable(s.string()),
    count: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
