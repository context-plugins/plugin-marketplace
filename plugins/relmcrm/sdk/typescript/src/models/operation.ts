import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { methodSchema, type Method } from "./method.js";
import { objectRelmCrmBatchApiSchema, type ObjectRelmCrmBatchApi } from "./object-relm-crm-batch-api.js";

export type Operation = {
  object?: ObjectRelmCrmBatchApi;
  method?: Method;
  data?: Record<string, unknown>;
  patch?: Record<string, unknown>;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const operationSchema: Schema<Operation> = s.object<Operation>(
  {
    object: s.optional(s.lazy(() => objectRelmCrmBatchApiSchema)),
    method: s.optional(s.lazy(() => methodSchema)),
    data: s.optional(s.record(s.string(), s.unknown())),
    patch: s.optional(s.record(s.string(), s.unknown())),
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
