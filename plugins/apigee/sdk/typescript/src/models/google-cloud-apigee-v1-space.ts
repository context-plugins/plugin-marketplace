import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Organization space resource. */
export type GoogleCloudApigeeV1Space = {
  /** Optional. Display name of the space. */
  displayName?: string;
  /** Output only. Last modified timestamp of the space. */
  updateTime?: string;
  /**
   * Output only. Identifier. Id of the space. This field is used as the resource name, and must
   * follow [AIP-122](https://google.aip.dev/122) guidelines.
   */
  name?: string;
  /** Output only. Create timestamp of the space. */
  createTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SpaceSchema: Schema<GoogleCloudApigeeV1Space> =
  s.object<GoogleCloudApigeeV1Space>(
    {
      displayName: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      name: s.optional(s.string()),
      createTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
