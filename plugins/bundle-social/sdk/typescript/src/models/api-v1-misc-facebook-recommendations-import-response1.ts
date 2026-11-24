import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { import1Schema, type Import1 } from "./import1.js";

export type ApiV1MiscFacebookRecommendationsImportResponse1 = {
  imports: Import1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookRecommendationsImportResponse1Schema: Schema<ApiV1MiscFacebookRecommendationsImportResponse1> =
  s.object<ApiV1MiscFacebookRecommendationsImportResponse1>(
    {
      imports: s.array(s.lazy(() => import1Schema)),
    },
    { additionalProperties: s.json() },
  );
