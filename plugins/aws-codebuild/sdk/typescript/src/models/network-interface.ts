import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NetworkInterface = {
  /** The ID of the subnet. */
  subnetId?: string;
  /** The ID of the network interface. */
  networkInterfaceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkInterfaceSchema: Schema<NetworkInterface> = s.object<NetworkInterface>(
  {
    subnetId: s.optional(s.string()),
    networkInterfaceId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
