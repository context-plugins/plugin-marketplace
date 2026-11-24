import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Summary of a FreeRTOS software configuration. */
export type SoftwareConfigurationSummary = {
  softwareConfigurationId?: string;
  name?: string;
  hardwarePlatform?: string;
  status?: string;
  version?: string;
  creationDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const softwareConfigurationSummarySchema: Schema<SoftwareConfigurationSummary> =
  s.object<SoftwareConfigurationSummary>(
    {
      softwareConfigurationId: s.optional(s.string()),
      name: s.optional(s.string()),
      hardwarePlatform: s.optional(s.string()),
      status: s.optional(s.string()),
      version: s.optional(s.string()),
      creationDate: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
