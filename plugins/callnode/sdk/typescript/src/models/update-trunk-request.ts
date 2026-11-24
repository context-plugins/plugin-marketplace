import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { egressTransportSchema, type EgressTransport } from "./egress-transport.js";
import {
  statusCallnodeIoSipTrunksApiSchema,
  type StatusCallnodeIoSipTrunksApi,
} from "./status-callnode-io-sip-trunks-api.js";

/**
 * Any subset of the fields below. Send `egressHost` as `null` or `""` to clear it (ingress-only). A
 * request with no recognized fields returns `no_fields`.
 */
export type UpdateTrunkRequest = {
  name?: string;
  /** Null or empty string clears egress delivery. */
  egressHost?: string | null;
  egressPort?: number;
  egressTransport?: EgressTransport;
  status?: StatusCallnodeIoSipTrunksApi;
  egressEnabled?: boolean;
  allowedIps?: string[];
  ingressEnabled?: boolean;
  /**
   * Turning this on for the first time mints credentials and returns `sipPassword` once in the
   * response. Turning it off keeps the credentials on file so re-enabling does not disturb a
   * configured PBX.
   */
  registrationEnabled?: boolean;
  defaultPhoneNumberId?: string | null;
  /** Null clears the trunk-level outbound caller ID. */
  outboundCliNumberId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateTrunkRequestProperties: s.Shape<UpdateTrunkRequest> = {
  name: s.optional(s.string()),
  egressHost: s.optionalNullable(s.string()),
  egressPort: s.optional(s.int()),
  egressTransport: s.optional(s.lazy(() => egressTransportSchema)),
  status: s.optional(s.lazy(() => statusCallnodeIoSipTrunksApiSchema)),
  egressEnabled: s.optional(s.boolean()),
  allowedIps: s.optional(s.array(s.string())),
  ingressEnabled: s.optional(s.boolean()),
  registrationEnabled: s.optional(s.boolean()),
  defaultPhoneNumberId: s.optionalNullable(s.string()),
  outboundCliNumberId: s.optionalNullable(s.string()),
};

export const updateTrunkRequestInternalSchema: Schema<UpdateTrunkRequest> = s.object<UpdateTrunkRequest>(
  updateTrunkRequestProperties,
  { additionalProperties: s.json() },
);

export const updateTrunkRequestSchema: Schema<UpdateTrunkRequest> = s.lazySchema(() =>
  s.object<UpdateTrunkRequest>(
    {
      ...updateTrunkRequestProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(64))),
    },
    { additionalProperties: s.json() },
  ),
);
