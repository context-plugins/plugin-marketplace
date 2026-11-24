import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { collectionSchema, type Collection } from "./collection.js";

export type ApiV1CollectionsResponse1 = {
  collections: Collection[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CollectionsResponse1Schema: Schema<ApiV1CollectionsResponse1> =
  s.object<ApiV1CollectionsResponse1>(
    {
      collections: s.array(s.lazy(() => collectionSchema)),
      nextCursor: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
