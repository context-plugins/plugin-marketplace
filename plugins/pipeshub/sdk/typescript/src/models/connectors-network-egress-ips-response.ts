import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorsNetworkEgressIpsResponse = {
  success: boolean;
  egressIps: string[];
};

export const connectorsNetworkEgressIpsResponseSchema: Schema<ConnectorsNetworkEgressIpsResponse> =
  s.object<ConnectorsNetworkEgressIpsResponse>({
    success: s.boolean(),
    egressIps: s.array(s.string()),
  });
