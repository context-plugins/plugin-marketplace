import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Details4 = {
  field?: string;
  value?: string;
  /**
   * ID of the existing task that holds this idempotencyKey. Poll it with GET
   * /v1/async/task/{taskId}.
   */
  taskId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const details4Schema: Schema<Details4> = s.object<Details4>(
  {
    field: s.optional(s.string()),
    value: s.optional(s.string()),
    taskId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
