import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1AmazonComprehendOperationsApiSchema,
  type Type1AmazonComprehendOperationsApi,
} from "./type1-amazon-comprehend-operations-api.js";

export type DocumentTypeListItemAmazonComprehendOperationsApi = {
  /** Page number. */
  page?: number;
  /** Document type. */
  type?: Type1AmazonComprehendOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentTypeListItemAmazonComprehendOperationsApiSchema: Schema<DocumentTypeListItemAmazonComprehendOperationsApi> =
  s.object<DocumentTypeListItemAmazonComprehendOperationsApi>(
    {
      page: s.optional(s.int()),
      type: s.optional(s.lazy(() => type1AmazonComprehendOperationsApiSchema)),
      _keysMap: {
        page: "Page",
        type: "Type",
      },
    },
    { additionalProperties: s.json() },
  );
