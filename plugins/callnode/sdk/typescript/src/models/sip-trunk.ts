import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { egressTransportSchema, type EgressTransport } from "./egress-transport.js";
import { registrationSchema, type Registration } from "./registration.js";
import {
  statusCallnodeIoSipTrunksApiSchema,
  type StatusCallnodeIoSipTrunksApi,
} from "./status-callnode-io-sip-trunks-api.js";

/** A saved SIP trunk — egress (outbound BYOC), ingress (inbound from your PBX/SBC), or both. */
export type SipTrunk = {
  id?: string;
  /** 1–64 characters. Unique across your active trunks. */
  name?: string;
  status?: StatusCallnodeIoSipTrunksApi;
  /** Whether outbound (BYOC) delivery to `egressHost` is enabled. */
  egressEnabled?: boolean;
  /** Hostname or IP of your SIP endpoint for outbound delivery. Null for an ingress-only trunk. */
  egressHost?: string | null;
  /** @default 5060 */
  egressPort?: number;
  egressTransport?: EgressTransport;
  /** Whether inbound calls from `allowedIps` are accepted. */
  ingressEnabled?: boolean;
  /** Public IPv4 addresses your PBX/SBC sends from — the accepted ingress source IPs. */
  allowedIps?: string[];
  /**
   * The id of one of your numbers — the default agent for ingress calls that do not match one of
   * your own DIDs.
   */
  defaultPhoneNumberId?: string | null;
  /**
   * The id of one of your numbers, presented as caller ID on outbound (termination) calls when the
   * INVITE's From is not itself one of your numbers — the normal case for a registration trunk,
   * whose From carries its auth username. A From that IS one of your live numbers always wins, so a
   * multi-number PBX can still present per-call caller ID.
   */
  outboundCliNumberId?: string | null;
  /**
   * True when this trunk is beyond your plan's included count and is billed the additional-trunk
   * fee.
   */
  monthlyFeeApplies?: boolean;
  nextBillingDate?: Date | null;
  /**
   * Registration-trunk settings, for a PBX with no static public IP. Never contains the password or
   * its digest.
   */
  registration?: Registration;
  /**
   * Present ONLY on the response that mints it — creating a registration trunk, enabling
   * registration, or rotating credentials. It cannot be retrieved afterwards; store it immediately.
   */
  sipPassword?: string;
  /** Human-readable reminder that accompanies `sipPassword`. */
  sipPasswordNotice?: string;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sipTrunkSchema: Schema<SipTrunk> = s.object<SipTrunk>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusCallnodeIoSipTrunksApiSchema)),
    egressEnabled: s.optional(s.boolean()),
    egressHost: s.optionalNullable(s.string()),
    egressPort: s.defaulted(s.int(), 5060),
    egressTransport: s.optional(s.lazy(() => egressTransportSchema)),
    ingressEnabled: s.optional(s.boolean()),
    allowedIps: s.optional(s.array(s.string())),
    defaultPhoneNumberId: s.optionalNullable(s.string()),
    outboundCliNumberId: s.optionalNullable(s.string()),
    monthlyFeeApplies: s.optional(s.boolean()),
    nextBillingDate: s.optionalNullable(s.dateTime()),
    registration: s.optional(s.lazy(() => registrationSchema)),
    sipPassword: s.optional(s.string()),
    sipPasswordNotice: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
