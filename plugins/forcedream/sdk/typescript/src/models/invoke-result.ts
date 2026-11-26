import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type InvokeResult = {
  status?: Status;
  agent?: string;
  taskId?: string;
  output?: Record<string, unknown>;
  chargedPence?: number | null;
  proofId?: string;
  error?: string;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invokeResultSchema: Schema<InvokeResult> = s.object<InvokeResult>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    agent: s.optional(s.string()),
    taskId: s.optional(s.string()),
    output: s.optional(s.record(s.string(), s.unknown())),
    chargedPence: s.optionalNullable(s.int()),
    proofId: s.optional(s.string()),
    error: s.optional(s.string()),
    message: s.optional(s.string()),
    _keysMap: {
      taskId: "task_id",
      chargedPence: "charged_pence",
      proofId: "proof_id",
    },
  },
  { additionalProperties: s.json() },
);
