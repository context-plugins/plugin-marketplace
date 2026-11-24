import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeCollectionRequest = {
  /** The ID of the collection to describe. */
  collectionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCollectionRequestSchema: Schema<DescribeCollectionRequest> =
  s.object<DescribeCollectionRequest>(
    {
      collectionId: s.string(),
      _keysMap: {
        collectionId: "CollectionId",
      },
    },
    { additionalProperties: s.json() },
  );
