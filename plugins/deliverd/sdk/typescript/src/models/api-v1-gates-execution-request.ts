import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  agentDeliverdDevGatesApiInternalSchema,
  agentDeliverdDevGatesApiSchema,
  type AgentDeliverdDevGatesApi,
} from "./agent-deliverd-dev-gates-api.js";
import { destination9InternalSchema, destination9Schema, type Destination9 } from "./destination9.js";
import { Phase4, phase4Schema } from "./phase4.js";

export type ApiV1GatesExecutionRequest = {
  /**
   * `started` claims a use before you act; `completed` or `failed` reports the outcome. Reporting
   * `completed` without a `claimId` claims and reports in one
   *
   * @default Phase4.Completed
   */
  phase?: Phase4;
  /** The id of your `started` receipt, when this finishes it */
  claimId?: string;
  executedAt?: Date;
  /** The sha256 of what you acted on. Required when the permission names an artifact */
  artifactSha256?: string;
  /** Where it landed. Must be where it was authorised to */
  destination?: Destination9;
  /**
   * What the act produced: a provider reference, a URL. Recorded as your report, not as verified
   * fact
   */
  result?: Record<string, unknown>;
  detail?: string;
  /**
   * Who you are, when you ask through a person's connection. Registered on first sight and bound to
   * that person. An agent key already says who it is
   */
  agent?: AgentDeliverdDevGatesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1GatesExecutionRequestProperties: s.Shape<ApiV1GatesExecutionRequest> = {
  phase: s.defaulted(phase4Schema, Phase4.Completed),
  claimId: s.optional(s.string()),
  executedAt: s.optional(s.dateTime()),
  artifactSha256: s.optional(s.string()),
  destination: s.optional(s.lazy(() => destination9InternalSchema)),
  result: s.optional(s.record(s.string(), s.unknown())),
  detail: s.optional(s.string()),
  agent: s.optional(s.lazy(() => agentDeliverdDevGatesApiInternalSchema)),
};

export const apiV1GatesExecutionRequestInternalSchema: Schema<ApiV1GatesExecutionRequest> =
  s.object<ApiV1GatesExecutionRequest>(apiV1GatesExecutionRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1GatesExecutionRequestSchema: Schema<ApiV1GatesExecutionRequest> = s.lazySchema(() =>
  s.object<ApiV1GatesExecutionRequest>(
    {
      ...apiV1GatesExecutionRequestProperties,
      artifactSha256: s.optional(s.string().check(s.pattern("^[0-9a-fA-F]{64}$"))),
      destination: s.optional(s.lazy(() => destination9Schema)),
      detail: s.optional(s.string().check(s.maxLength(1000))),
      agent: s.optional(s.lazy(() => agentDeliverdDevGatesApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
