import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchResultErrorEntrySchema, type BatchResultErrorEntry } from "./batch-result-error-entry.js";
import {
  changeMessageVisibilityBatchResultEntrySchema,
  type ChangeMessageVisibilityBatchResultEntry,
} from "./change-message-visibility-batch-result-entry.js";

export type ChangeMessageVisibilityBatchResult = {
  /** A list of ChangeMessageVisibilityBatchResultEntry items. */
  successful: ChangeMessageVisibilityBatchResultEntry[];
  /** A list of BatchResultErrorEntry items. */
  failed: BatchResultErrorEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeMessageVisibilityBatchResultSchema: Schema<ChangeMessageVisibilityBatchResult> =
  s.object<ChangeMessageVisibilityBatchResult>(
    {
      successful: s.array(s.lazy(() => changeMessageVisibilityBatchResultEntrySchema)),
      failed: s.array(s.lazy(() => batchResultErrorEntrySchema)),
      _keysMap: {
        successful: "Successful",
        failed: "Failed",
      },
    },
    { additionalProperties: s.json() },
  );
