import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSoftwareConfigurationRequest = {
  name: string;
  description?: string;
  hardwarePlatform: string;
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSoftwareConfigurationRequestSchema: Schema<CreateSoftwareConfigurationRequest> =
  s.object<CreateSoftwareConfigurationRequest>(
    {
      name: s.string(),
      description: s.optional(s.string()),
      hardwarePlatform: s.string(),
      tags: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
