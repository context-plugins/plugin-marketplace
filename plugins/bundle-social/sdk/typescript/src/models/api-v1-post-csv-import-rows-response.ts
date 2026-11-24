import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item1BundleSocialPostCsvApiSchema,
  type Item1BundleSocialPostCsvApi,
} from "./item1-bundle-social-post-csv-api.js";

export type ApiV1PostCsvImportRowsResponse = {
  items: Item1BundleSocialPostCsvApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostCsvImportRowsResponseSchema: Schema<ApiV1PostCsvImportRowsResponse> =
  s.object<ApiV1PostCsvImportRowsResponse>(
    {
      items: s.array(s.lazy(() => item1BundleSocialPostCsvApiSchema)),
      total: s.float64(),
    },
    { additionalProperties: s.json() },
  );
