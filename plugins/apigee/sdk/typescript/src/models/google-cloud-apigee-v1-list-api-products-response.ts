import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiProductSchema,
  type GoogleCloudApigeeV1ApiProduct,
} from "./google-cloud-apigee-v1-api-product.js";

export type GoogleCloudApigeeV1ListApiProductsResponse = {
  /** Lists all API product names defined for an organization. */
  apiProduct?: GoogleCloudApigeeV1ApiProduct[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListApiProductsResponseSchema: Schema<GoogleCloudApigeeV1ListApiProductsResponse> =
  s.object<GoogleCloudApigeeV1ListApiProductsResponse>(
    {
      apiProduct: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApiProductSchema))),
    },
    { additionalProperties: s.json() },
  );
