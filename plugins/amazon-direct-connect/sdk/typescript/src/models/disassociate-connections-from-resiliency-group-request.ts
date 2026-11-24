import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisassociateConnectionsFromResiliencyGroupRequest = {
  /** The IDs or ARNs of the connections to disassociate from the resiliency group. */
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

export const disassociateConnectionsFromResiliencyGroupRequestSchema: Schema<DisassociateConnectionsFromResiliencyGroupRequest> =
  s.object<DisassociateConnectionsFromResiliencyGroupRequest>(
    {
      connectionIdentifiers: s.array(s.string()),
      resiliencyGroupId: s.string(),
      clientToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
