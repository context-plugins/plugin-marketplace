import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state10Schema, type State10 } from "./state10.js";

/**
 * Apigee NAT(network address translation) address. A NAT address is a static external IP address
 * used for Internet egress traffic.
 */
export type GoogleCloudApigeeV1NatAddress = {
  /** Output only. The static IPV4 address. */
  ipAddress?: string;
  /** Output only. State of the nat address. */
  state?: State10;
  /** Required. Resource ID of the NAT address. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1NatAddressSchema: Schema<GoogleCloudApigeeV1NatAddress> =
  s.object<GoogleCloudApigeeV1NatAddress>(
    {
      ipAddress: s.optional(s.string()),
      state: s.optional(s.lazy(() => state10Schema)),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
