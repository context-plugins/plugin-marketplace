import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { opSchema, type Op } from "./op.js";

/** A single SCIM PATCH operation. */
export type ScimPatchOperation = {
  /** The operation type. */
  op: Op;
  /** The attribute path to target for the operation. */
  path?: string;
  /** The value to apply for add or replace operations. */
  value?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimPatchOperationSchema: Schema<ScimPatchOperation> = s.object<ScimPatchOperation>(
  {
    op: opSchema,
    path: s.optional(s.string()),
    value: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
