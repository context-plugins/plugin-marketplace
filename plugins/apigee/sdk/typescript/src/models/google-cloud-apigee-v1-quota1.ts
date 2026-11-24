import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Quota parameters to be enforced for the resources, methods, and API source combination. If none
 * are specified, quota enforcement will not be done.
 */
export type GoogleCloudApigeeV1Quota1 = {
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

export const googleCloudApigeeV1Quota1Schema: Schema<GoogleCloudApigeeV1Quota1> =
  s.object<GoogleCloudApigeeV1Quota1>(
    {
      interval: s.optional(s.string()),
      timeUnit: s.optional(s.string()),
      limit: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
