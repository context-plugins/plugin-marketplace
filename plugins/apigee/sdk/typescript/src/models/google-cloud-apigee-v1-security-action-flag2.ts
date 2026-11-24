import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityActionHttpHeaderSchema,
  type GoogleCloudApigeeV1SecurityActionHttpHeader,
} from "./google-cloud-apigee-v1-security-action-http-header.js";

/** Flag a request through if it matches this SecurityAction. */
export type GoogleCloudApigeeV1SecurityActionFlag2 = {
  /**
   * Optional. A list of HTTP headers to be sent to the target in case of a FLAG SecurityAction.
   * Limit 5 headers per SecurityAction. At least one is mandatory.
   */
  headers?: GoogleCloudApigeeV1SecurityActionHttpHeader[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityActionFlag2Schema: Schema<GoogleCloudApigeeV1SecurityActionFlag2> =
  s.object<GoogleCloudApigeeV1SecurityActionFlag2>(
    {
      headers: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SecurityActionHttpHeaderSchema))),
    },
    { additionalProperties: s.json() },
  );
