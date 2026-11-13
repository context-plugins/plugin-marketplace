import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsAttachmentsStoreResponse = {
  store?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsAttachmentsStoreResponseSchema: Schema<DocsAttachmentsStoreResponse> =
  s.object<DocsAttachmentsStoreResponse>(
    {
      store: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
