import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  agentDeliverdDevGatesApiInternalSchema,
  agentDeliverdDevGatesApiSchema,
  type AgentDeliverdDevGatesApi,
} from "./agent-deliverd-dev-gates-api.js";

export type ApiV1GatesCancelRequest = {
  /** Why, for the record */
  note?: string;
  /**
   * Who you are, when you ask through a person's connection. Registered on first sight and bound to
   * that person. An agent key already says who it is
   */
  agent?: AgentDeliverdDevGatesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1GatesCancelRequestProperties: s.Shape<ApiV1GatesCancelRequest> = {
  note: s.optional(s.string()),
  agent: s.optional(s.lazy(() => agentDeliverdDevGatesApiInternalSchema)),
};

export const apiV1GatesCancelRequestInternalSchema: Schema<ApiV1GatesCancelRequest> =
  s.object<ApiV1GatesCancelRequest>(apiV1GatesCancelRequestProperties, { additionalProperties: s.json() });

export const apiV1GatesCancelRequestSchema: Schema<ApiV1GatesCancelRequest> = s.lazySchema(() =>
  s.object<ApiV1GatesCancelRequest>(
    {
      ...apiV1GatesCancelRequestProperties,
      note: s.optional(s.string().check(s.maxLength(1000))),
      agent: s.optional(s.lazy(() => agentDeliverdDevGatesApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
