import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  importBundleSocialPostImportApiSchema,
  type ImportBundleSocialPostImportApi,
} from "./import-bundle-social-post-import-api.js";

export type ApiV1PostHistoryImportResponse1 = {
  imports: ImportBundleSocialPostImportApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostHistoryImportResponse1Schema: Schema<ApiV1PostHistoryImportResponse1> =
  s.object<ApiV1PostHistoryImportResponse1>(
    {
      imports: s.array(s.lazy(() => importBundleSocialPostImportApiSchema)),
    },
    { additionalProperties: s.json() },
  );
