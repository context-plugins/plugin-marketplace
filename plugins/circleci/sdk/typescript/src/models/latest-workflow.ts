import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The latest workflow this job is part of */
export type LatestWorkflow = {
  /** The workflow ID */
  id?: string;
  /** The workflow name */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const latestWorkflowSchema: Schema<LatestWorkflow> = s.object<LatestWorkflow>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
