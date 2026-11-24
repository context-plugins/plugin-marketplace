import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Deny a request through if it matches this SecurityAction. */
export type GoogleCloudApigeeV1SecurityActionDeny2 = {
  /** Optional. The HTTP response code if the Action = DENY. */
  responseCode?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityActionDeny2Schema: Schema<GoogleCloudApigeeV1SecurityActionDeny2> =
  s.object<GoogleCloudApigeeV1SecurityActionDeny2>(
    {
      responseCode: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
