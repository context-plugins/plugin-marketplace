import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchImportMetadataSchema, type BatchImportMetadata } from "./batch-import-metadata.js";

export type BatchHistory = {
  metadataList?: BatchImportMetadata[] | null;
};

export const batchHistorySchema: Schema<BatchHistory> = s.object<BatchHistory>({
  metadataList: s.optionalNullable(s.array(s.lazy(() => batchImportMetadataSchema))),
});
