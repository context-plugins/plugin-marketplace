import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  apigatewayApiConfigFile3Schema,
  type ApigatewayApiConfigFile3,
} from "./apigateway-api-config-file3.js";

/** An OpenAPI Specification Document describing an API. */
export type ApigatewayApiConfigOpenApiDocument = {
  /** The OpenAPI Specification document file. */
  document?: ApigatewayApiConfigFile3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayApiConfigOpenApiDocumentSchema: Schema<ApigatewayApiConfigOpenApiDocument> =
  s.object<ApigatewayApiConfigOpenApiDocument>(
    {
      document: s.optional(s.lazy(() => apigatewayApiConfigFile3Schema)),
    },
    { additionalProperties: s.json() },
  );
