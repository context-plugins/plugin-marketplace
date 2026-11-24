import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAmazonComprehendOperationsApiSchema,
  type TypeAmazonComprehendOperationsApi,
} from "./type-amazon-comprehend-operations-api.js";

export type RelationshipsListItemAmazonComprehendOperationsApi = {
  /** Identifers of the child blocks. */
  ids?: string[];
  /** Only supported relationship is a child relationship. */
  type?: TypeAmazonComprehendOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relationshipsListItemAmazonComprehendOperationsApiSchema: Schema<RelationshipsListItemAmazonComprehendOperationsApi> =
  s.object<RelationshipsListItemAmazonComprehendOperationsApi>(
    {
      ids: s.optional(s.array(s.string())),
      type: s.optional(s.lazy(() => typeAmazonComprehendOperationsApiSchema)),
      _keysMap: {
        ids: "Ids",
        type: "Type",
      },
    },
    { additionalProperties: s.json() },
  );
