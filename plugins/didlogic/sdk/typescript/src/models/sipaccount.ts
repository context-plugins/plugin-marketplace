import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Sipaccount = {
  /** Unique SIP account identifier */
  id: number;
  /** SIP account username */
  name: string;
  /** Caller ID */
  callerid: string;
  /** Account label */
  label: string;
  /** SIP server host */
  host: string;
  /** Whether number rewriting is enabled */
  rewriteEnabled: boolean;
  /** Rewrite condition pattern (regular expression) */
  rewriteCond: string;
  /** Prefix to add when rewriting numbers */
  rewritePrefix: string;
  /** Whether DID info is included in SIP headers */
  didinfoEnabled: boolean;
  /** Whether access is restricted by IP address */
  ipRestrict: boolean;
  /** Whether the per-call duration limit is enabled */
  callRestrict: boolean;
  /** Maximum call duration in seconds */
  callLimit: number;
  /** Whether concurrent channel limits are enabled */
  channelsRestrict: boolean;
  /** Maximum number of concurrent channels allowed */
  maxChannels: number;
  /** Whether maximum call cost limit is enabled */
  costLimit: boolean;
  /** Maximum allowed cost per call */
  maxCallCost: string;
  /** Account creation timestamp */
  createdAt: string;
  /** Total charges accumulated on this account */
  charge: string;
  /** Total talk time in seconds */
  talkTime: number;
  /** Whether account has low balance */
  lowBalance: boolean;
  /** Maximum total spend amount */
  spendLimit: string;
  /** Whether spending limit is enabled */
  spendLimitEnabled: boolean;
  /** Amount available for spending */
  availableAmount: string;
  callRecordingEnabled: boolean;
  /** List of IP addresses allowed to authenticate */
  allowedIps: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sipaccountSchema: Schema<Sipaccount> = s.object<Sipaccount>(
  {
    id: s.int(),
    name: s.string(),
    callerid: s.string(),
    label: s.string(),
    host: s.string(),
    rewriteEnabled: s.boolean(),
    rewriteCond: s.string(),
    rewritePrefix: s.string(),
    didinfoEnabled: s.boolean(),
    ipRestrict: s.boolean(),
    callRestrict: s.boolean(),
    callLimit: s.int(),
    channelsRestrict: s.boolean(),
    maxChannels: s.int(),
    costLimit: s.boolean(),
    maxCallCost: s.string(),
    createdAt: s.string(),
    charge: s.string(),
    talkTime: s.int(),
    lowBalance: s.boolean(),
    spendLimit: s.string(),
    spendLimitEnabled: s.boolean(),
    availableAmount: s.string(),
    callRecordingEnabled: s.boolean(),
    allowedIps: s.array(s.record(s.string(), s.unknown())),
    _keysMap: {
      rewriteEnabled: "rewrite_enabled",
      rewriteCond: "rewrite_cond",
      rewritePrefix: "rewrite_prefix",
      didinfoEnabled: "didinfo_enabled",
      ipRestrict: "ip_restrict",
      callRestrict: "call_restrict",
      callLimit: "call_limit",
      channelsRestrict: "channels_restrict",
      maxChannels: "max_channels",
      costLimit: "cost_limit",
      maxCallCost: "max_call_cost",
      createdAt: "created_at",
      talkTime: "talk_time",
      lowBalance: "low_balance",
      spendLimit: "spend_limit",
      spendLimitEnabled: "spend_limit_enabled",
      availableAmount: "available_amount",
      callRecordingEnabled: "call_recording_enabled",
      allowedIps: "allowed_ips",
    },
  },
  { additionalProperties: s.json() },
);
