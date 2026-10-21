import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  restoreRecordsResultItemSchemaSchema,
  type RestoreRecordsResultItemSchema,
} from "./restore-records-result-item-schema.js";

/** Response returned by POST /knowledgeBase/records/restore. */
export type RestoreRecordsResponseSchema = {
  /** True when every requested record was restored */
  success: boolean;
  /** Records restored, counting those restored along with them */
  restoredCount: number;
  failedCount: number;
  /**
   * One entry per requested id: `recordId`, `success`, `code`, and either the restore response
   * fields or a `reason` that says what to do next.
   */
  results: RestoreRecordsResultItemSchema[];
};

export const restoreRecordsResponseSchemaSchema: Schema<RestoreRecordsResponseSchema> =
  s.object<RestoreRecordsResponseSchema>({
    success: s.boolean(),
    restoredCount: s.int(),
    failedCount: s.int(),
    results: s.array(s.lazy(() => restoreRecordsResultItemSchemaSchema)),
  });
