import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BodyOutboundBatchUpload = {
  file?: Uint8Array;
};

export const bodyOutboundBatchUploadSchema: Schema<BodyOutboundBatchUpload> =
  s.object<BodyOutboundBatchUpload>({
    file: s.optional(s.bytes()),
  });
