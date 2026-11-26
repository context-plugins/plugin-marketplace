import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApplicationsEnvironmentsSettingsAppInsightsKeyRequest = {
  /** The Application Insights instrumentation key */
  key?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationsEnvironmentsSettingsAppInsightsKeyRequestSchema: Schema<ApplicationsEnvironmentsSettingsAppInsightsKeyRequest> =
  s.object<ApplicationsEnvironmentsSettingsAppInsightsKeyRequest>(
    {
      key: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
