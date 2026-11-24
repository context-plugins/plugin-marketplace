import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdrQueueForReprocessingOutput = {
  /**
   * ID associated with the reprocessing request. This can be used to query the status of the
   * request.
   */
  requestId: string;
};

export const idrQueueForReprocessingOutputSchema: Schema<IdrQueueForReprocessingOutput> =
  s.object<IdrQueueForReprocessingOutput>({
    requestId: s.string(),
  });
