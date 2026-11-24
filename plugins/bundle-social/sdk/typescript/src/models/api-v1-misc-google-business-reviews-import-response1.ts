import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  importBundleSocialMiscApiSchema,
  type ImportBundleSocialMiscApi,
} from "./import-bundle-social-misc-api.js";

export type ApiV1MiscGoogleBusinessReviewsImportResponse1 = {
  imports: ImportBundleSocialMiscApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessReviewsImportResponse1Schema: Schema<ApiV1MiscGoogleBusinessReviewsImportResponse1> =
  s.object<ApiV1MiscGoogleBusinessReviewsImportResponse1>(
    {
      imports: s.array(s.lazy(() => importBundleSocialMiscApiSchema)),
    },
    { additionalProperties: s.json() },
  );
