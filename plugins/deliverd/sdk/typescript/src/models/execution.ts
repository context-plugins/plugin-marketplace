import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The run this belongs to, found by its id or started. Use instead of flowId */
export type Execution = {
  /** Your platform's id for this run */
  providerExecutionId?: string;
  objective?: string;
  title?: string;
  /** The run that delegated this one */
  parentFlowId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const executionProperties: s.Shape<Execution> = {
  providerExecutionId: s.optional(s.string()),
  objective: s.optional(s.string()),
  title: s.optional(s.string()),
  parentFlowId: s.optional(s.string()),
};

export const executionInternalSchema: Schema<Execution> = s.object<Execution>(executionProperties, {
  additionalProperties: s.json(),
});

export const executionSchema: Schema<Execution> = s.lazySchema(() =>
  s.object<Execution>(
    {
      ...executionProperties,
      providerExecutionId: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      objective: s.optional(s.string().check(s.maxLength(4000))),
      title: s.optional(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
