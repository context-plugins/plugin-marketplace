import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum1CommonelementsComDatasetCatalogApiSchema,
  type Datum1CommonelementsComDatasetCatalogApi,
} from "./datum1-commonelements-com-dataset-catalog-api.js";

export type ApiV1AssociationsDatasetsResponse = {
  /** @default "True" */
  ok?: "True";
  data: Datum1CommonelementsComDatasetCatalogApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsDatasetsResponseSchema: Schema<ApiV1AssociationsDatasetsResponse> =
  s.object<ApiV1AssociationsDatasetsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datum1CommonelementsComDatasetCatalogApiSchema)),
    },
    { additionalProperties: s.json() },
  );
