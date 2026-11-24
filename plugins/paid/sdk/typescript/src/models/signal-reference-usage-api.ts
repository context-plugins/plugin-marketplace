import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DEPRECATED: Use SignalV2 instead for cleaner field names. */
export type SignalReferenceUsageApi = {
  eventName?: string;
  /** DEPRECATED: Use product_id in SignalV2 instead. */
  agentId?: string;
  /** DEPRECATED: Use external_product_id in SignalV2 instead. */
  externalAgentId?: string;
  /**
   * DEPRECATED: The external customer id. Use `external_customer_id` or `internal_customer_id`
   * instead.
   */
  customerId?: string;
  data?: Record<string, unknown>;
  /** A unique key to ensure idempotent signal processing */
  idempotencyKey?: string;
  /** DEPRECATED: Use customer_id in SignalV2 instead. This was Paid's internal customer ID. */
  internalCustomerId?: string;
  /** Your system's customer ID */
  externalCustomerId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalReferenceUsageApiSchema: Schema<SignalReferenceUsageApi> =
  s.object<SignalReferenceUsageApi>(
    {
      eventName: s.optional(s.string()),
      agentId: s.optional(s.string()),
      externalAgentId: s.optional(s.string()),
      customerId: s.optional(s.string()),
      data: s.optional(s.record(s.string(), s.unknown())),
      idempotencyKey: s.optional(s.string()),
      internalCustomerId: s.optional(s.string()),
      externalCustomerId: s.optional(s.string()),
      _keysMap: {
        eventName: "event_name",
        agentId: "agent_id",
        externalAgentId: "external_agent_id",
        customerId: "customer_id",
        idempotencyKey: "idempotency_key",
        internalCustomerId: "internal_customer_id",
        externalCustomerId: "external_customer_id",
      },
    },
    { additionalProperties: s.json() },
  );
