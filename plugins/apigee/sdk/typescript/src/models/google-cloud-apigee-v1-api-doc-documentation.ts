import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AsyncApiDocumentation2Schema,
  type GoogleCloudApigeeV1AsyncApiDocumentation2,
} from "./google-cloud-apigee-v1-async-api-documentation2.js";
import {
  googleCloudApigeeV1GraphqlDocumentation1Schema,
  type GoogleCloudApigeeV1GraphqlDocumentation1,
} from "./google-cloud-apigee-v1-graphql-documentation1.js";
import {
  googleCloudApigeeV1OasDocumentation2Schema,
  type GoogleCloudApigeeV1OasDocumentation2,
} from "./google-cloud-apigee-v1-oas-documentation2.js";

/** The documentation for a catalog item. */
export type GoogleCloudApigeeV1ApiDocDocumentation = {
  /** Optional. AsyncAPI Specification documentation. */
  asyncApiDocumentation?: GoogleCloudApigeeV1AsyncApiDocumentation2;
  /** Optional. GraphQL documentation. */
  graphqlDocumentation?: GoogleCloudApigeeV1GraphqlDocumentation1;
  /** Optional. OpenAPI Specification documentation. */
  oasDocumentation?: GoogleCloudApigeeV1OasDocumentation2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiDocDocumentationSchema: Schema<GoogleCloudApigeeV1ApiDocDocumentation> =
  s.object<GoogleCloudApigeeV1ApiDocDocumentation>(
    {
      asyncApiDocumentation: s.optional(s.lazy(() => googleCloudApigeeV1AsyncApiDocumentation2Schema)),
      graphqlDocumentation: s.optional(s.lazy(() => googleCloudApigeeV1GraphqlDocumentation1Schema)),
      oasDocumentation: s.optional(s.lazy(() => googleCloudApigeeV1OasDocumentation2Schema)),
    },
    { additionalProperties: s.json() },
  );
