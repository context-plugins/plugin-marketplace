import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DnsZonePeeringConfig1Schema,
  type GoogleCloudApigeeV1DnsZonePeeringConfig1,
} from "./google-cloud-apigee-v1-dns-zone-peering-config1.js";
import { state11Schema, type State11 } from "./state11.js";

/**
 * A DNS zone is a resource under an Apigee organization that is used to create a DNS peering with
 * Apigee's network. DNS peering will let Apigee instances resolve the hostnames created in a peered
 * network.
 */
export type GoogleCloudApigeeV1DnsZone = {
  /** Output only. The time that this resource was created on the server. */
  createTime?: string;
  /** DNS PEERING zone configuration. */
  peeringConfig?: GoogleCloudApigeeV1DnsZonePeeringConfig1;
  /**
   * Identifier. Unique name for the resource. Defined by the server Format:
   * "organizations/{organization}/dnsZones/{dns_zone}".
   */
  name?: string;
  /**
   * Output only. State of the DNS Peering. Values other than `ACTIVE` mean the resource is not
   * ready to use.
   */
  state?: State11;
  /** Required. The domain name for hosts in this private zone, for instance "example.com.". */
  domain?: string;
  /** Output only. The time that this resource was updated on the server. */
  updateTime?: string;
  /**
   * Required. Description of the resource. String of at most 1024 characters associated with this
   * resource for the user's convenience.
   */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DnsZoneSchema: Schema<GoogleCloudApigeeV1DnsZone> =
  s.object<GoogleCloudApigeeV1DnsZone>(
    {
      createTime: s.optional(s.string()),
      peeringConfig: s.optional(s.lazy(() => googleCloudApigeeV1DnsZonePeeringConfig1Schema)),
      name: s.optional(s.string()),
      state: s.optional(s.lazy(() => state11Schema)),
      domain: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
