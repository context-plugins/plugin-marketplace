import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DocumentationFile4Schema,
  type GoogleCloudApigeeV1DocumentationFile4,
} from "./google-cloud-apigee-v1-documentation-file4.js";

/** Optional. GraphQL documentation. */
export type GoogleCloudApigeeV1GraphqlDocumentation1 = {
  /**
   * Required. The GraphQL endpoint URI to be queried by API consumers. Max length is 2,083
   * characters.
   */
  endpointUri?: string;
  /** Required. The documentation file contents for the GraphQL schema. */
  schema?: GoogleCloudApigeeV1DocumentationFile4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1GraphqlDocumentation1Schema: Schema<GoogleCloudApigeeV1GraphqlDocumentation1> =
  s.object<GoogleCloudApigeeV1GraphqlDocumentation1>(
    {
      endpointUri: s.optional(s.string()),
      schema: s.optional(s.lazy(() => googleCloudApigeeV1DocumentationFile4Schema)),
    },
    { additionalProperties: s.json() },
  );
