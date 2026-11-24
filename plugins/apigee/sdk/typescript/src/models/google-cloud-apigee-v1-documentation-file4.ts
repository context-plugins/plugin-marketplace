import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. The documentation file contents for the GraphQL schema. */
export type GoogleCloudApigeeV1DocumentationFile4 = {
  /**
   * Required. A display name for the file, shown in the management UI. Max length is 255
   * characters.
   */
  displayName?: string;
  /** Required. The file contents. The max size is 4 MB. */
  contents?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DocumentationFile4Schema: Schema<GoogleCloudApigeeV1DocumentationFile4> =
  s.object<GoogleCloudApigeeV1DocumentationFile4>(
    {
      displayName: s.optional(s.string()),
      contents: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
