import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DocumentationFile2Schema,
  type GoogleCloudApigeeV1DocumentationFile2,
} from "./google-cloud-apigee-v1-documentation-file2.js";

/** AsyncAPI Specification documentation for a catalog item. */
export type GoogleCloudApigeeV1AsyncApiDocumentation = {
  /**
   * Required. The documentation file contents for the AsyncAPI Specification. JSON and YAML file
   * formats are supported.
   */
  spec?: GoogleCloudApigeeV1DocumentationFile2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AsyncApiDocumentationSchema: Schema<GoogleCloudApigeeV1AsyncApiDocumentation> =
  s.object<GoogleCloudApigeeV1AsyncApiDocumentation>(
    {
      spec: s.optional(s.lazy(() => googleCloudApigeeV1DocumentationFile2Schema)),
    },
    { additionalProperties: s.json() },
  );
