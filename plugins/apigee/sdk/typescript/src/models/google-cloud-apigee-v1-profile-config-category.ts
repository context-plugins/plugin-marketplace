import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Advanced API Security provides security profile that scores the following categories. */
export type GoogleCloudApigeeV1ProfileConfigCategory = {
  /** Checks to see if you have a mediation policy in place. */
  mediation?: Record<string, unknown>;
  /** Checks to see if you have configured mTLS for the target server. */
  mtls?: Record<string, unknown>;
  /** Checks to see if you have CORS policy in place. */
  cors?: Record<string, unknown>;
  /** Checks to see if you have a threat protection policy in place. */
  threat?: Record<string, unknown>;
  /**
   * Checks for abuse, which includes any requests sent to the API for purposes other than what it
   * is intended for, such as high volumes of requests, data scraping, and abuse related to
   * authorization.
   */
  abuse?: Record<string, unknown>;
  /** Checks to see if you have an authorization policy in place. */
  authorization?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ProfileConfigCategorySchema: Schema<GoogleCloudApigeeV1ProfileConfigCategory> =
  s.object<GoogleCloudApigeeV1ProfileConfigCategory>(
    {
      mediation: s.optional(s.record(s.string(), s.unknown())),
      mtls: s.optional(s.record(s.string(), s.unknown())),
      cors: s.optional(s.record(s.string(), s.unknown())),
      threat: s.optional(s.record(s.string(), s.unknown())),
      abuse: s.optional(s.record(s.string(), s.unknown())),
      authorization: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
