import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data16Schema, type Data16 } from "./data16.js";

export type AsyncOperationAcceptedResponse = {
  data?: Data16;
  requestId?: string;
};

export const asyncOperationAcceptedResponseSchema: Schema<AsyncOperationAcceptedResponse> =
  s.object<AsyncOperationAcceptedResponse>({
    data: s.optional(s.lazy(() => data16Schema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
