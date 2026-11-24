import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request for SetAddonEnablement. */
export type GoogleCloudApigeeV1SetAddonEnablementRequest = {
  /** If the API Security should be enabled in the environment. */
  apiSecurityEnabled?: boolean;
  /** If the Analytics should be enabled in the environment. */
  analyticsEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SetAddonEnablementRequestSchema: Schema<GoogleCloudApigeeV1SetAddonEnablementRequest> =
  s.object<GoogleCloudApigeeV1SetAddonEnablementRequest>(
    {
      apiSecurityEnabled: s.optional(s.boolean()),
      analyticsEnabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
