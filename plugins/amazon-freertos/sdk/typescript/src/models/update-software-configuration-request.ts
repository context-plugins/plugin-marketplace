import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateSoftwareConfigurationRequest = {
  name?: string;
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSoftwareConfigurationRequestSchema: Schema<UpdateSoftwareConfigurationRequest> =
  s.object<UpdateSoftwareConfigurationRequest>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
