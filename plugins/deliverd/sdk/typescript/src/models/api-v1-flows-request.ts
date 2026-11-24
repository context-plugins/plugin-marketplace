import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1FlowsRequest = {
  /** What this piece of work is, as the timeline will be titled */
  title: string;
  /** What it is for, for whoever reads the history a year from now */
  description?: string;
  workspaceId?: string;
  /**
   * Your own reference, returned unchanged. Look it up before starting a second flow for the same
   * job
   */
  externalId?: string;
  metadata?: Record<string, unknown>;
  /**
   * The flow this work was delegated from — an orchestrator's run — so the record keeps the chain
   */
  parentFlowId?: string;
  /** Your platform's id for this run, so a resumed session can find it again */
  providerExecutionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1FlowsRequestProperties: s.Shape<ApiV1FlowsRequest> = {
  title: s.string(),
  description: s.optional(s.string()),
  workspaceId: s.optional(s.string()),
  externalId: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  parentFlowId: s.optional(s.string()),
  providerExecutionId: s.optional(s.string()),
};

export const apiV1FlowsRequestInternalSchema: Schema<ApiV1FlowsRequest> = s.object<ApiV1FlowsRequest>(
  apiV1FlowsRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1FlowsRequestSchema: Schema<ApiV1FlowsRequest> = s.lazySchema(() =>
  s.object<ApiV1FlowsRequest>(
    {
      ...apiV1FlowsRequestProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      description: s.optional(s.string().check(s.maxLength(4000))),
      externalId: s.optional(s.string().check(s.maxLength(200))),
      providerExecutionId: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
