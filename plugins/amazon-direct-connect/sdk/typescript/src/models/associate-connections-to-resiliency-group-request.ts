import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociateConnectionsToResiliencyGroupRequest = {
  /** The IDs or ARNs of the connections to associate with the resiliency group. */
  connectionIdentifiers: string[];
  /** The ID of the resiliency group. */
  resiliencyGroupId: string;
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   */
  clientToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateConnectionsToResiliencyGroupRequestSchema: Schema<AssociateConnectionsToResiliencyGroupRequest> =
  s.object<AssociateConnectionsToResiliencyGroupRequest>(
    {
      connectionIdentifiers: s.array(s.string()),
      resiliencyGroupId: s.string(),
      clientToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
