import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { processPropertySchema, type ProcessProperty } from "./process-property.js";

/** Request to execute an integration process on a specific Atom. */
export type ExecutionRequest = {
  /** ID of the Atom on which to run the process. */
  atomId: string;
  /** ID of the process to execute. */
  processId: string;
  /** Optional runtime properties to pass to the process. */
  processProperties?: ProcessProperty[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionRequestSchema: Schema<ExecutionRequest> = s.object<ExecutionRequest>(
  {
    atomId: s.string(),
    processId: s.string(),
    processProperties: s.optional(s.array(s.lazy(() => processPropertySchema))),
  },
  { additionalProperties: s.json() },
);
