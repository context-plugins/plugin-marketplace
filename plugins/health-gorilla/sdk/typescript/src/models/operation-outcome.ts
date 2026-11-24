import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { issueSchema, type Issue } from "./issue.js";

export type OperationOutcome = {
  resourceType?: string;
  issue?: Issue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const operationOutcomeSchema: Schema<OperationOutcome> = s.object<OperationOutcome>(
  {
    resourceType: s.optional(s.string()),
    issue: s.optional(s.array(s.lazy(() => issueSchema))),
  },
  { additionalProperties: s.json() },
);
