import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/**
 * A FreeRTOS software configuration record specifying firmware libraries and settings for a
 * hardware platform.
 */
export type SoftwareConfiguration = {
  softwareConfigurationId?: string;
  name: string;
  description?: string;
  arn?: string;
  status?: Status;
  version?: string;
  hardwarePlatform: string;
  creationDate?: Date;
  lastUpdatedDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const softwareConfigurationSchema: Schema<SoftwareConfiguration> = s.object<SoftwareConfiguration>(
  {
    softwareConfigurationId: s.optional(s.string()),
    name: s.string(),
    description: s.optional(s.string()),
    arn: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    version: s.optional(s.string()),
    hardwarePlatform: s.string(),
    creationDate: s.optional(s.dateTime()),
    lastUpdatedDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
