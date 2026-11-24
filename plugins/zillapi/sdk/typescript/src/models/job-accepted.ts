import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

export type JobAccepted = {
  data?: Data1;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobAcceptedSchema: Schema<JobAccepted> = s.object<JobAccepted>(
  {
    data: s.optional(s.lazy(() => data1Schema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
