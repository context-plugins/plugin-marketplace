import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deviceInfo2Schema, type DeviceInfo2 } from "./device-info2.js";

/**
 * Required. The meta information collected about the job searcher, used to improve the search
 * quality of the service. The identifiers (such as `user_id`) are provided by users, and must be
 * unique and consistent.
 */
export type RequestMetadata1 = {
  /**
   * Only set when any of domain, session_id and user_id isn't available for some reason. It is
   * highly recommended not to set this field and provide accurate domain, session_id and user_id
   * for the best service experience.
   */
  allowMissingIds?: boolean;
  /**
   * Required if allow_missing_ids is unset or `false`. A unique session identification string. A
   * session is defined as the duration of an end user's interaction with the service over a certain
   * period. Obfuscate this field for privacy concerns before providing it to the service. Note that
   * any improvements to the model for a particular tenant site rely on this field being set
   * correctly to a unique session ID. The maximum number of allowed characters is 255.
   */
  sessionId?: string;
  /** The type of device used by the job seeker at the time of the call to the service. */
  deviceInfo?: DeviceInfo2;
  /**
   * Required if allow_missing_ids is unset or `false`. A unique user identification string, as
   * determined by the client. To have the strongest positive impact on search quality make sure the
   * client-level is unique. Obfuscate this field for privacy concerns before providing it to the
   * service. Note that any improvements to the model for a particular tenant site rely on this
   * field being set correctly to a unique user ID. The maximum number of allowed characters is 255.
   */
  userId?: string;
  /**
   * Required if allow_missing_ids is unset or `false`. The client-defined scope or source of the
   * service call, which typically is the domain on which the service has been implemented and is
   * currently being run. For example, if the service is being run by client *Foo, Inc.*, on job
   * board www.foo.com and career site www.bar.com, then this field is set to "foo.com" for use on
   * the job board, and "bar.com" for use on the career site. Note that any improvements to the
   * model for a particular tenant site rely on this field being set correctly to a unique domain.
   * The maximum number of allowed characters is 255.
   */
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestMetadata1Schema: Schema<RequestMetadata1> = s.object<RequestMetadata1>(
  {
    allowMissingIds: s.optional(s.boolean()),
    sessionId: s.optional(s.string()),
    deviceInfo: s.optional(s.lazy(() => deviceInfo2Schema)),
    userId: s.optional(s.string()),
    domain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
