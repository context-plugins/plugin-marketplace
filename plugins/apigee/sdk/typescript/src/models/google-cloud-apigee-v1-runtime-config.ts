import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Runtime configuration for the organization. Response for GetRuntimeConfig. */
export type GoogleCloudApigeeV1RuntimeConfig = {
  /**
   * Output only. Tenant project ID associated with the Apigee organization. The tenant project is
   * used to host Google-managed resources that are dedicated to this Apigee organization. Clients
   * have limited access to resources within the tenant project used to support Apigee runtime
   * instances. Access to the tenant project is managed using SetSyncAuthorization. It can be empty
   * if the tenant project hasn't been created yet.
   */
  tenantProjectId?: string;
  /** Cloud Storage bucket used for uploading Analytics records. */
  analyticsBucket?: string;
  /** Name of the resource in the following format: `organizations/{org}/runtimeConfig`. */
  name?: string;
  /** Cloud Storage bucket used for uploading Trace records. */
  traceBucket?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeConfigSchema: Schema<GoogleCloudApigeeV1RuntimeConfig> =
  s.object<GoogleCloudApigeeV1RuntimeConfig>(
    {
      tenantProjectId: s.optional(s.string()),
      analyticsBucket: s.optional(s.string()),
      name: s.optional(s.string()),
      traceBucket: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
