import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type TasksBulkResponse = {
  data?: Data;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksBulkResponseSchema: Schema<TasksBulkResponse> = s.object<TasksBulkResponse>(
  {
    data: s.optional(s.lazy(() => dataSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
