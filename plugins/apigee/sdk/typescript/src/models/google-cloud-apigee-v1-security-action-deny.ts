import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Message that should be set in case of a Deny Action. */
export type GoogleCloudApigeeV1SecurityActionDeny = {
  /** Optional. The HTTP response code if the Action = DENY. */
  responseCode?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityActionDenySchema: Schema<GoogleCloudApigeeV1SecurityActionDeny> =
  s.object<GoogleCloudApigeeV1SecurityActionDeny>(
    {
      responseCode: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
