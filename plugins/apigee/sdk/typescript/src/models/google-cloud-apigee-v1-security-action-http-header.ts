import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An HTTP header. */
export type GoogleCloudApigeeV1SecurityActionHttpHeader = {
  /** The header value to be sent to the target. */
  value?: string;
  /** The header name to be sent to the target. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityActionHttpHeaderSchema: Schema<GoogleCloudApigeeV1SecurityActionHttpHeader> =
  s.object<GoogleCloudApigeeV1SecurityActionHttpHeader>(
    {
      value: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
