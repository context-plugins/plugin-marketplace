import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialPostCsvApiSchema,
  type ItemBundleSocialPostCsvApi,
} from "./item-bundle-social-post-csv-api.js";

export type ApiV1PostCsvImportResponse1 = {
  items: ItemBundleSocialPostCsvApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostCsvImportResponse1Schema: Schema<ApiV1PostCsvImportResponse1> =
  s.object<ApiV1PostCsvImportResponse1>(
    {
      items: s.array(s.lazy(() => itemBundleSocialPostCsvApiSchema)),
      total: s.float64(),
    },
    { additionalProperties: s.json() },
  );
