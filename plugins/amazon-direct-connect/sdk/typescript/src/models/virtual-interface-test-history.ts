import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VirtualInterfaceTestHistory = {
  /** The ID of the virtual interface failover test. */
  testId?: string;
  /** The ID of the tested virtual interface. */
  virtualInterfaceId?: string;
  /**
   * The BGP peers that were put in the DOWN state as part of the virtual interface failover test.
   */
  bgpPeers?: string[];
  /** The status of the virtual interface failover test. */
  status?: string;
  /** The owner ID of the tested virtual interface. */
  ownerAccount?: string;
  /** The time that the virtual interface failover test ran in minutes. */
  testDurationInMinutes?: number;
  /** The time that the virtual interface moves to the DOWN state. */
  startTime?: Date;
  /** The time that the virtual interface moves out of the DOWN state. */
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualInterfaceTestHistorySchema: Schema<VirtualInterfaceTestHistory> =
  s.object<VirtualInterfaceTestHistory>(
    {
      testId: s.optional(s.string()),
      virtualInterfaceId: s.optional(s.string()),
      bgpPeers: s.optional(s.array(s.string())),
      status: s.optional(s.string()),
      ownerAccount: s.optional(s.string()),
      testDurationInMinutes: s.optional(s.int()),
      startTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
