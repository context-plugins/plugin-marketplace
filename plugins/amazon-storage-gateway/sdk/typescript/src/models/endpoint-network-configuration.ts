import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EndpointNetworkConfiguration = {
  /**
   * A list of gateway IP addresses on which the associated Amazon FSx file system is available. If
   * multiple file systems are associated with this gateway, this field is required.
   */
  ipAddresses?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const endpointNetworkConfigurationSchema: Schema<EndpointNetworkConfiguration> =
  s.object<EndpointNetworkConfiguration>(
    {
      ipAddresses: s.optional(s.array(s.string())),
      _keysMap: {
        ipAddresses: "IpAddresses",
      },
    },
    { additionalProperties: s.json() },
  );
