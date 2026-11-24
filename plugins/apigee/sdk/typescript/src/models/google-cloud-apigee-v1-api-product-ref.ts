import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1ApiProductRef = {
  /** Status of the API product. Valid values are `approved` or `revoked`. */
  status?: string;
  /** Name of the API product. */
  apiproduct?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiProductRefSchema: Schema<GoogleCloudApigeeV1ApiProductRef> =
  s.object<GoogleCloudApigeeV1ApiProductRef>(
    {
      status: s.optional(s.string()),
      apiproduct: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
