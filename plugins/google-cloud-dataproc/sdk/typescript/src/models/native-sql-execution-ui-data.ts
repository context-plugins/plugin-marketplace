import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fallbackReasonSchema, type FallbackReason } from "./fallback-reason.js";

/** Native SQL Execution Data */
export type NativeSqlExecutionUiData = {
  /** Required. Execution ID of the Native SQL Execution. */
  executionId?: string;
  /** Optional. Fallback node to reason. */
  fallbackNodeToReason?: FallbackReason[];
  /** Optional. Number of nodes in Native. */
  numNativeNodes?: number;
  /** Optional. Number of nodes fallen back to Spark. */
  numFallbackNodes?: number;
  /** Optional. Description of the fallback. */
  fallbackDescription?: string;
  /** Optional. Description of the execution. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nativeSqlExecutionUiDataSchema: Schema<NativeSqlExecutionUiData> =
  s.object<NativeSqlExecutionUiData>(
    {
      executionId: s.optional(s.string()),
      fallbackNodeToReason: s.optional(s.array(s.lazy(() => fallbackReasonSchema))),
      numNativeNodes: s.optional(s.int()),
      numFallbackNodes: s.optional(s.int()),
      fallbackDescription: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
