import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1NatAddressSchema,
  type GoogleCloudApigeeV1NatAddress,
} from "./google-cloud-apigee-v1-nat-address.js";

/** Response for ListNatAddresses. */
export type GoogleCloudApigeeV1ListNatAddressesResponse = {
  /** List of NAT Addresses for the instance. */
  natAddresses?: GoogleCloudApigeeV1NatAddress[];
  /**
   * Page token that you can include in a ListNatAddresses request to retrieve the next page of
   * content. If omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListNatAddressesResponseSchema: Schema<GoogleCloudApigeeV1ListNatAddressesResponse> =
  s.object<GoogleCloudApigeeV1ListNatAddressesResponse>(
    {
      natAddresses: s.optional(s.array(s.lazy(() => googleCloudApigeeV1NatAddressSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
