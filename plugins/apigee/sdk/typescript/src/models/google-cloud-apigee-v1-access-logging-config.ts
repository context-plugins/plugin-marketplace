import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Access logging configuration enables customers to ship the access logs from the tenant projects
 * to their own project's cloud logging. The feature is at the instance level ad disabled by
 * default. It can be enabled during CreateInstance or UpdateInstance.
 */
export type GoogleCloudApigeeV1AccessLoggingConfig = {
  /**
   * Optional. Ship the access log entries that match the status_code defined in the filter. The
   * status_code is the only expected/supported filter field. (Ex: status_code) The filter will
   * parse it to the Common Expression Language semantics for expression evaluation to build the
   * filter condition. (Ex: "filter": status_code >= 200 && status_code < 300 )
   */
  filter?: string;
  /** Optional. Boolean flag that specifies whether the customer access log feature is enabled. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AccessLoggingConfigSchema: Schema<GoogleCloudApigeeV1AccessLoggingConfig> =
  s.object<GoogleCloudApigeeV1AccessLoggingConfig>(
    {
      filter: s.optional(s.string()),
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
