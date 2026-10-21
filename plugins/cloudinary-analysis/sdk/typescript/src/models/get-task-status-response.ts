import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data17Schema, type Data17 } from "./data17.js";

export type GetTaskStatusResponse = {
  data?: Data17;
  requestId?: string;
};

export const getTaskStatusResponseSchema: Schema<GetTaskStatusResponse> = s.object<GetTaskStatusResponse>({
  data: s.optional(s.lazy(() => data17Schema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
