import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bulkStatusSchema, type BulkStatus } from "./bulk-status.js";
import { callbackMethodSchema, type CallbackMethod } from "./callback-method.js";

export type BulkCallback = {
  bulkId?: string;
  callbackMethod?: CallbackMethod;
  bulkStatus?: BulkStatus;
  successRecords?: number;
  personEnriched?: number;
  companyEnriched?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkCallbackSchema: Schema<BulkCallback> = s.object<BulkCallback>(
  {
    bulkId: s.optional(s.string()),
    callbackMethod: s.optional(s.lazy(() => callbackMethodSchema)),
    bulkStatus: s.optional(s.lazy(() => bulkStatusSchema)),
    successRecords: s.optional(s.int()),
    personEnriched: s.optional(s.int()),
    companyEnriched: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
