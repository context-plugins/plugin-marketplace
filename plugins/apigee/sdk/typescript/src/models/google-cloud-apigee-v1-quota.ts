import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Quota contains the essential parameters needed that can be applied on the resources, methods, API
 * source combination associated with this API product. While Quota is optional, setting it prevents
 * requests from exceeding the provisioned parameters.
 */
export type GoogleCloudApigeeV1Quota = {
  /** Required. Time interval over which the number of request messages is calculated. */
  interval?: string;
  /**
   * Time unit defined for the `interval`. Valid values include `minute`, `hour`, `day`, or `month`.
   * If `limit` and `interval` are valid, the default value is `hour`; otherwise, the default is
   * null.
   */
  timeUnit?: string;
  /**
   * Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding
   * this limit will be rejected.
   */
  limit?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1QuotaSchema: Schema<GoogleCloudApigeeV1Quota> =
  s.object<GoogleCloudApigeeV1Quota>(
    {
      interval: s.optional(s.string()),
      timeUnit: s.optional(s.string()),
      limit: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
