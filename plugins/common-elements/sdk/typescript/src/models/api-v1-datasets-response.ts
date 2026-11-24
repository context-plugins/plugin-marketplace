import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumCommonelementsComDatasetCatalogApiSchema,
  type DatumCommonelementsComDatasetCatalogApi,
} from "./datum-commonelements-com-dataset-catalog-api.js";

export type ApiV1DatasetsResponse = {
  /** @default "True" */
  ok?: "True";
  data: DatumCommonelementsComDatasetCatalogApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DatasetsResponseSchema: Schema<ApiV1DatasetsResponse> = s.object<ApiV1DatasetsResponse>(
  {
    ok: s.defaulted(s.literal("True"), "True"),
    data: s.array(s.lazy(() => datumCommonelementsComDatasetCatalogApiSchema)),
  },
  { additionalProperties: s.json() },
);
