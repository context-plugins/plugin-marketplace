import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateCollectionRequest = {
  /** ID for the collection that you are creating. */
  collectionId: string;
  /** A set of tags (key-value pairs) that you want to attach to the collection. */
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCollectionRequestSchema: Schema<CreateCollectionRequest> =
  s.object<CreateCollectionRequest>(
    {
      collectionId: s.string(),
      tags: s.optional(s.record(s.string(), s.string())),
      _keysMap: {
        collectionId: "CollectionId",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
