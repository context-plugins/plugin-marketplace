import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestoreRecordsRequestBody = {
  recordIds: string[];
};

export const restoreRecordsRequestBodySchema: Schema<RestoreRecordsRequestBody> =
  s.object<RestoreRecordsRequestBody>({
    recordIds: s.array(s.string()),
  });
