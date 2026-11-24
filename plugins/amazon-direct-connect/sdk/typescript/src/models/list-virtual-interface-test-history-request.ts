import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListVirtualInterfaceTestHistoryRequest = {
  /** The ID of the virtual interface failover test. */
  testId?: string;
  /** The ID of the virtual interface that was tested. */
  virtualInterfaceId?: string;
  /**
   * The BGP peers that were placed in the DOWN state during the virtual interface failover test.
   */
  bgpPeers?: string[];
  /** The status of the virtual interface failover test. */
  status?: string;
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results,
   * make another call with the returned nextToken value. If MaxResults is given a value larger than
   * 100, only 100 results are returned.
   */
  maxResults?: number;
  /** The token for the next page of results. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVirtualInterfaceTestHistoryRequestSchema: Schema<ListVirtualInterfaceTestHistoryRequest> =
  s.object<ListVirtualInterfaceTestHistoryRequest>(
    {
      testId: s.optional(s.string()),
      virtualInterfaceId: s.optional(s.string()),
      bgpPeers: s.optional(s.array(s.string())),
      status: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
