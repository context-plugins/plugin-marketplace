import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DnsZoneSchema,
  type GoogleCloudApigeeV1DnsZone,
} from "./google-cloud-apigee-v1-dns-zone.js";

/** Response for list DNS zones. */
export type GoogleCloudApigeeV1ListDnsZonesResponse = {
  /** DNS zones in a given organization. */
  dnsZones?: GoogleCloudApigeeV1DnsZone[];
  /**
   * Page token that you can include in an `ListDnsZones` request to retrieve the next page. If
   * omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListDnsZonesResponseSchema: Schema<GoogleCloudApigeeV1ListDnsZonesResponse> =
  s.object<GoogleCloudApigeeV1ListDnsZonesResponse>(
    {
      dnsZones: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DnsZoneSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
