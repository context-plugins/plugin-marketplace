import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RestorePeriod = {
  from?: Date;
  to?: Date;
  correspondingApplicationPackageVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const restorePeriodSchema: Schema<RestorePeriod> = s.object<RestorePeriod>(
  {
    from: s.optional(s.dateTime()),
    to: s.optional(s.dateTime()),
    correspondingApplicationPackageVersion: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
