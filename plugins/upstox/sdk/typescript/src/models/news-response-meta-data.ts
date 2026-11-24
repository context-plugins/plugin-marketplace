import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newsResponsePageDataSchema, type NewsResponsePageData } from "./news-response-page-data.js";

export type NewsResponseMetaData = {
  page?: NewsResponsePageData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsResponseMetaDataSchema: Schema<NewsResponseMetaData> = s.object<NewsResponseMetaData>(
  {
    page: s.optional(s.lazy(() => newsResponsePageDataSchema)),
  },
  { additionalProperties: s.json() },
);
