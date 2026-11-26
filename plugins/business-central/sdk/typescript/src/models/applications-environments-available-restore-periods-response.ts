import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { restorePeriodSchema, type RestorePeriod } from "./restore-period.js";

export type ApplicationsEnvironmentsAvailableRestorePeriodsResponse = {
  value?: RestorePeriod[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationsEnvironmentsAvailableRestorePeriodsResponseSchema: Schema<ApplicationsEnvironmentsAvailableRestorePeriodsResponse> =
  s.object<ApplicationsEnvironmentsAvailableRestorePeriodsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => restorePeriodSchema))),
    },
    { additionalProperties: s.json() },
  );
