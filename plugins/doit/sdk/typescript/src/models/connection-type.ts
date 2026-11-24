import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Link connection type. */
export const ConnectionType = {
  Normal: "normal",
  Tunnel: "tunnel",
  Private: "private",
  Vpn: "VPN",
  VpcPeering: "VPC Peering",
  NetworkConnectivityCenter: "Network Connectivity Center",
  PrivateServiceConnect: "Private Service Connect",
  PrivateGoogleAccess: "Private Google Access",
  ServerlessVpc: "Serverless VPC",
  ServerlessVpcAccessConnector: "Serverless VPC Access Connector",
  CrossCloudInterconnect: "Cross Cloud Interconnect",
  PartnerInterconnect: "Partner Interconnect",
  DedicatedInterconnect: "Dedicated Interconnect",
} as const;
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType] | (string & {});

export const connectionTypeSchema: EnumSchema<ConnectionType> = s.enumOf<ConnectionType>(ConnectionType);
