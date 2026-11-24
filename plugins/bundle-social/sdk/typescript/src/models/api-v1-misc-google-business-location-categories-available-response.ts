import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse = {
  categories?: Record<string, unknown>[];
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessLocationCategoriesAvailableResponseSchema: Schema<ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse> =
  s.object<ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse>(
    {
      categories: s.optional(s.array(s.record(s.string(), s.unknown()))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
