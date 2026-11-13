import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Operation1 = {
  /** HTTP method for the operation. */
  method?: string;
  /** Resource path for the operation. */
  path?: string;
  /** Data for the operation. */
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const operation1Schema: Schema<Operation1> = s.object<Operation1>(
  {
    method: s.optional(s.string()),
    path: s.optional(s.string()),
    data: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
