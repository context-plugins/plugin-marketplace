import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testMetadataSchema, type TestMetadata } from "./test-metadata.js";

export type TestList = {
  /** List of test metadata */
  items?: TestMetadata[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testListSchema: Schema<TestList> = s.object<TestList>(
  {
    items: s.optional(s.array(s.lazy(() => testMetadataSchema))),
    nextPageToken: s.optional(s.string()),
    _keysMap: {
      nextPageToken: "next_page_token",
    },
  },
  { additionalProperties: s.json() },
);
