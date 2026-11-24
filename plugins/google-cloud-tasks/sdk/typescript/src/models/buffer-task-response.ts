import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { task3Schema, type Task3 } from "./task3.js";

/** Response message for BufferTask. */
export type BufferTaskResponse = {
  /** The created task. */
  task?: Task3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bufferTaskResponseSchema: Schema<BufferTaskResponse> = s.object<BufferTaskResponse>(
  {
    task: s.optional(s.lazy(() => task3Schema)),
  },
  { additionalProperties: s.json() },
);
