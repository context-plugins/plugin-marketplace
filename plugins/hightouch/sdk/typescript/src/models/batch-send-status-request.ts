import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for the batch send status endpoint. */
export type BatchSendStatusRequest = {
  /** `sendId` values returned by the trigger endpoint. */
  sendIds: string[];
};

const batchSendStatusRequestProperties: s.Shape<BatchSendStatusRequest> = {
  sendIds: s.array(s.string()),
};

export const batchSendStatusRequestInternalSchema: Schema<BatchSendStatusRequest> =
  s.object<BatchSendStatusRequest>(batchSendStatusRequestProperties);

export const batchSendStatusRequestSchema: Schema<BatchSendStatusRequest> = s.lazySchema(() =>
  s.object<BatchSendStatusRequest>({
    ...batchSendStatusRequestProperties,
    sendIds: s.array(s.string()).check(s.minLength(1), s.maxLength(100)),
  }),
);
