import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataCommonelementsComBulkExportApiSchema,
  type DataCommonelementsComBulkExportApi,
} from "./data-commonelements-com-bulk-export-api.js";

export type ApiV1ExportChangesResponse = {
  /** @default "True" */
  ok?: "True";
  data: DataCommonelementsComBulkExportApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ExportChangesResponseSchema: Schema<ApiV1ExportChangesResponse> =
  s.object<ApiV1ExportChangesResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: dataCommonelementsComBulkExportApiSchema,
    },
    { additionalProperties: s.json() },
  );
