import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartBgpFailoverTestRequest = {
  /** The ID of the virtual interface you want to test. */
  virtualInterfaceId: string;
  /** The BGP peers to place in the DOWN state. */
  bgpPeers?: string[];
  /**
   * The time in minutes that the virtual interface failover test will last. Maximum value: 4,320
   * minutes (72 hours). Default: 180 minutes (3 hours).
   */
  testDurationInMinutes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBgpFailoverTestRequestSchema: Schema<StartBgpFailoverTestRequest> =
  s.object<StartBgpFailoverTestRequest>(
    {
      virtualInterfaceId: s.string(),
      bgpPeers: s.optional(s.array(s.string())),
      testDurationInMinutes: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
