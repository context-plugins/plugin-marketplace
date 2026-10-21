import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaEventBreakerSchema,
  type FunctionConfSchemaEventBreaker,
} from "./function-conf-schema-event-breaker.js";

export type PipelineFunctionEventBreaker = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>event_breaker</code> @default "event_breaker" */
  id?: "event_breaker";
  /** Brief description of the Pipeline function. */
  description?: string;
  /**
   * If <code>true</code>, disable the Pipeline function so that events are not passed through it.
   * Otherwise, <code>false</code>.
   */
  disabled?: boolean;
  /**
   * If <code>true</code>, stop passing events to downstream Pipeline Functions after the Function
   * executes. Otherwise, <code>false</code>.
   */
  final?: boolean;
  /** Configuration specific to the Pipeline Function. */
  conf: FunctionConfSchemaEventBreaker;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionEventBreakerSchema: Schema<PipelineFunctionEventBreaker> =
  s.object<PipelineFunctionEventBreaker>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("event_breaker"), "event_breaker"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaEventBreakerSchema,
    groupId: s.optional(s.string()),
  });
