import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldsSignedSchema, type FieldsSigned } from "./fields-signed.js";

export type VerifyResult = {
  verified?: boolean;
  taskId?: string;
  keyId?: string;
  algorithm?: string;
  /** 8 for proofs without external_cost_hash, 10 for proofs with it. */
  fieldsSigned?: FieldsSigned;
  trustless?: boolean;
  message?: string;
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const verifyResultSchema: Schema<VerifyResult> = s.object<VerifyResult>(
  {
    verified: s.optional(s.boolean()),
    taskId: s.optional(s.string()),
    keyId: s.optional(s.string()),
    algorithm: s.optional(s.string()),
    fieldsSigned: s.optional(s.lazy(() => fieldsSignedSchema)),
    trustless: s.optional(s.boolean()),
    message: s.optional(s.string()),
    note: s.optional(s.string()),
    _keysMap: {
      taskId: "task_id",
      keyId: "key_id",
      fieldsSigned: "fields_signed",
    },
  },
  { additionalProperties: s.json() },
);
