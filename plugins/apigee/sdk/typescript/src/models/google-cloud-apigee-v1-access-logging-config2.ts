import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Access logging configuration enables the access logging feature at the instance. Apigee
 * customers can enable access logging to ship the access logs to their own project's cloud logging.
 */
export type GoogleCloudApigeeV1AccessLoggingConfig2 = {
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

export const googleCloudApigeeV1AccessLoggingConfig2Schema: Schema<GoogleCloudApigeeV1AccessLoggingConfig2> =
  s.object<GoogleCloudApigeeV1AccessLoggingConfig2>(
    {
      filter: s.optional(s.string()),
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
