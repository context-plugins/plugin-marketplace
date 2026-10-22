import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IpList = {
  /** A list of the IP addresses LaunchDarkly's service uses */
  addresses: string[];
  /** A list of the IP addresses outgoing webhook notifications use */
  outboundAddresses: string[];
};

export const ipListSchema: Schema<IpList> = s.object<IpList>({
  addresses: s.array(s.string()),
  outboundAddresses: s.array(s.string()),
});
