import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { opSchema, type Op } from "./op.js";

export type Operation = {
  /** The operation type. */
  op: Op;
  /** The attribute path to operate on. */
  path?: string;
  /** The value to set for add and replace operations. */
  value?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const operationSchema: Schema<Operation> = s.object<Operation>(
  {
    op: opSchema,
    path: s.optional(s.string()),
    value: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
