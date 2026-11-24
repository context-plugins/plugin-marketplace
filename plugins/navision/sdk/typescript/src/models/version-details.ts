import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VersionDetails = {
  /** Current version number */
  version?: string;
  /** When the grace period starts for the current major version */
  gracePeriodStartDate?: Date;
  /** When the enforced update period starts */
  enforcedUpdatePeriodStartDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const versionDetailsSchema: Schema<VersionDetails> = s.object<VersionDetails>(
  {
    version: s.optional(s.string()),
    gracePeriodStartDate: s.optional(s.dateTime()),
    enforcedUpdatePeriodStartDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
