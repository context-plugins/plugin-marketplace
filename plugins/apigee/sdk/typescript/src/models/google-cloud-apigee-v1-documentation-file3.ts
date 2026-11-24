import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. The documentation file contents for the OpenAPI Specification. JSON and YAML file
 * formats are supported.
 */
export type GoogleCloudApigeeV1DocumentationFile3 = {
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

export const googleCloudApigeeV1DocumentationFile3Schema: Schema<GoogleCloudApigeeV1DocumentationFile3> =
  s.object<GoogleCloudApigeeV1DocumentationFile3>(
    {
      displayName: s.optional(s.string()),
      contents: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
