import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "./format.js";
import {
  googleCloudApigeeV1DocumentationFile3Schema,
  type GoogleCloudApigeeV1DocumentationFile3,
} from "./google-cloud-apigee-v1-documentation-file3.js";

/** Optional. OpenAPI Specification documentation. */
export type GoogleCloudApigeeV1OasDocumentation2 = {
  /**
   * Required. The documentation file contents for the OpenAPI Specification. JSON and YAML file
   * formats are supported.
   */
  spec?: GoogleCloudApigeeV1DocumentationFile3;
  /** Output only. The format of the input specification file contents. */
  format?: Format;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OasDocumentation2Schema: Schema<GoogleCloudApigeeV1OasDocumentation2> =
  s.object<GoogleCloudApigeeV1OasDocumentation2>(
    {
      spec: s.optional(s.lazy(() => googleCloudApigeeV1DocumentationFile3Schema)),
      format: s.optional(s.lazy(() => formatSchema)),
    },
    { additionalProperties: s.json() },
  );
