import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumSchema, type Datum } from "./datum.js";

export type BulkCampaignsExportResponse = {
  data?: Datum[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkCampaignsExportResponseSchema: Schema<BulkCampaignsExportResponse> =
  s.object<BulkCampaignsExportResponse>(
    {
      data: s.optional(s.array(s.lazy(() => datumSchema))),
    },
    { additionalProperties: s.json() },
  );
