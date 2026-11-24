import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  agentDeliverdDevGatesApiInternalSchema,
  agentDeliverdDevGatesApiSchema,
  type AgentDeliverdDevGatesApi,
} from "./agent-deliverd-dev-gates-api.js";

export type ApiV1GatesReleaseRequest = {
  /**
   * Who you are, when you ask through a person's connection. Registered on first sight and bound to
   * that person. An agent key already says who it is
   */
  agent?: AgentDeliverdDevGatesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1GatesReleaseRequestProperties: s.Shape<ApiV1GatesReleaseRequest> = {
  agent: s.optional(s.lazy(() => agentDeliverdDevGatesApiInternalSchema)),
};

export const apiV1GatesReleaseRequestInternalSchema: Schema<ApiV1GatesReleaseRequest> =
  s.object<ApiV1GatesReleaseRequest>(apiV1GatesReleaseRequestProperties, { additionalProperties: s.json() });

export const apiV1GatesReleaseRequestSchema: Schema<ApiV1GatesReleaseRequest> = s.lazySchema(() =>
  s.object<ApiV1GatesReleaseRequest>(
    {
      ...apiV1GatesReleaseRequestProperties,
      agent: s.optional(s.lazy(() => agentDeliverdDevGatesApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
