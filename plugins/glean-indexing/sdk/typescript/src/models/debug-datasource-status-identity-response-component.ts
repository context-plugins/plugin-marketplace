import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkUploadHistoryEventSchema, type BulkUploadHistoryEvent } from "./bulk-upload-history-event.js";
import { counts1Schema, type Counts1 } from "./counts1.js";

export type DebugDatasourceStatusIdentityResponseComponent = {
  /** Information about active and recent successful uploads for the datasource */
  bulkUploadHistory?: BulkUploadHistoryEvent[];
  counts?: Counts1;
};

export const debugDatasourceStatusIdentityResponseComponentSchema: Schema<DebugDatasourceStatusIdentityResponseComponent> =
  s.object<DebugDatasourceStatusIdentityResponseComponent>({
    bulkUploadHistory: s.optional(s.array(s.lazy(() => bulkUploadHistoryEventSchema))),
    counts: s.optional(s.lazy(() => counts1Schema)),
  });
