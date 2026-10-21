import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snmpTrapDestinationSchema, type SnmpTrapDestination } from "./snmp-trap-destination.js";

export type OutputSnmp = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "snmp" */
  type?: "snmp";
  /** Pipeline to process data before sending out to this output */
  pipeline?: string;
  /** Fields to automatically add to events, such as cribl_pipe. Supports wildcards. */
  systemFields?: string[];
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /** One or more SNMP destinations to forward traps to */
  hosts: SnmpTrapDestination[];
  /**
   * How often to resolve the destination hostname to an IP address. Ignored if all destinations are
   * IP addresses. A value of 0 means every trap sent will incur a DNS lookup.
   */
  dnsResolvePeriodSec?: number;
  /**
   * Send SNMP Trap traffic using the original event's Source IP and port. To enable this, you must
   * install the external `udp-sender` helper binary at `/usr/bin/udp-sender` on all Worker Nodes
   * and grant it the `CAP_NET_RAW` capability.
   */
  enableIpSpoofing?: boolean;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * MTU in bytes. The actual maximum SNMP Trap payload size will be MTU minus IP and UDP headers
   * (28 bytes for IPv4, 48 bytes for IPv6). Payloads exceeding this limit will be dropped.
   */
  maxRecordSize?: number;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
};

export const outputSnmpSchema: Schema<OutputSnmp> = s.object<OutputSnmp>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("snmp"), "snmp"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  hosts: s.array(s.lazy(() => snmpTrapDestinationSchema)),
  dnsResolvePeriodSec: s.optional(s.float64()),
  enableIpSpoofing: s.optional(s.boolean()),
  description: s.optional(s.string()),
  maxRecordSize: s.optional(s.float64()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateStreamtags: "__template_streamtags",
  },
});
