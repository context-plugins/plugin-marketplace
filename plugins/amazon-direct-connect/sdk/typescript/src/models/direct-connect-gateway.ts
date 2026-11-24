import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  directConnectGatewayStateSchema,
  type DirectConnectGatewayState,
} from "./direct-connect-gateway-state.js";
import { tagSchema, type Tag } from "./tag.js";

export type DirectConnectGateway = {
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /** The name of the Direct Connect gateway. */
  directConnectGatewayName?: string;
  /** The autonomous system number (AS) for the Amazon side of the connection. */
  amazonSideAsn?: number;
  /** The ID of the Amazon Web Services account that owns the Direct Connect gateway. */
  ownerAccount?: string;
  /**
   * The state of the Direct Connect gateway. The following are the possible values: pending: The
   * initial state after calling CreateDirectConnectGateway. available: The Direct Connect gateway
   * is ready for use. deleting: The initial state after calling DeleteDirectConnectGateway.
   * deleted: The Direct Connect gateway is deleted and cannot pass traffic.
   */
  directConnectGatewayState?: DirectConnectGatewayState;
  /** The error message if the state of an object failed to advance. */
  stateChangeError?: string;
  /**
   * The total number of inbound route prefixes allocated to the attachments on the Direct Connect
   * gateway. The count combines the IPv4 and IPv6 address families.
   */
  totalPrefixPoolAllocations?: number;
  /** Information about a tag. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const directConnectGatewaySchema: Schema<DirectConnectGateway> = s.object<DirectConnectGateway>(
  {
    directConnectGatewayId: s.optional(s.string()),
    directConnectGatewayName: s.optional(s.string()),
    amazonSideAsn: s.optional(s.int()),
    ownerAccount: s.optional(s.string()),
    directConnectGatewayState: s.optional(s.lazy(() => directConnectGatewayStateSchema)),
    stateChangeError: s.optional(s.string()),
    totalPrefixPoolAllocations: s.optional(s.int()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
