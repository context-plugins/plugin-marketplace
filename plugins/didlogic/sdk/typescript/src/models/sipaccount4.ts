import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Sipaccount4 = {
  /** Account label/name */
  label?: string;
  /** SIP password */
  password?: string;
  /** Caller ID to display on outbound calls */
  callerid?: string;
  /** Enable number rewriting */
  rewriteEnabled?: boolean;
  /** Rewrite condition pattern (regular expression) */
  rewriteCond?: string;
  /** Prefix to add when rewriting numbers */
  rewritePrefix?: string;
  /** Enable DID info in SIP headers */
  didinfoEnabled?: boolean;
  /** Restrict access by IP address (requires allowed IPs) */
  ipRestrict?: boolean;
  /** Enable the per-call duration limit */
  callRestrict?: boolean;
  /** Maximum call duration in seconds */
  callLimit?: number;
  /** Enable concurrent channel limits */
  channelsRestrict?: boolean;
  /** Maximum concurrent channels allowed */
  maxChannels?: number;
  /** Enable maximum call cost limit */
  costLimit?: boolean;
  /** Maximum allowed cost per call in cents */
  maxCallCost?: number;
  /**
   * Enable total spending limit. Switching a disabled limit back on restarts it: the full limit is
   * available again, counted from now
   */
  spendLimitEnabled?: boolean;
  /** Maximum total spend amount in cents */
  spendLimit?: number;
  /** Amount available for spend limit reset in cents */
  resetAvailableAmount?: number;
  /** Enable or disable recording of outbound calls made via a selected SIP account */
  callRecordingEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sipaccount4Schema: Schema<Sipaccount4> = s.object<Sipaccount4>(
  {
    label: s.optional(s.string()),
    password: s.optional(s.string()),
    callerid: s.optional(s.string()),
    rewriteEnabled: s.optional(s.boolean()),
    rewriteCond: s.optional(s.string()),
    rewritePrefix: s.optional(s.string()),
    didinfoEnabled: s.optional(s.boolean()),
    ipRestrict: s.optional(s.boolean()),
    callRestrict: s.optional(s.boolean()),
    callLimit: s.optional(s.int()),
    channelsRestrict: s.optional(s.boolean()),
    maxChannels: s.optional(s.int()),
    costLimit: s.optional(s.boolean()),
    maxCallCost: s.optional(s.int()),
    spendLimitEnabled: s.optional(s.boolean()),
    spendLimit: s.optional(s.int()),
    resetAvailableAmount: s.optional(s.int()),
    callRecordingEnabled: s.optional(s.boolean()),
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
      spendLimitEnabled: "spend_limit_enabled",
      spendLimit: "spend_limit",
      resetAvailableAmount: "reset_available_amount",
      callRecordingEnabled: "call_recording_enabled",
    },
  },
  { additionalProperties: s.json() },
);
