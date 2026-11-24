import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformId1Schema, type PlatformId1 } from "./platform-id1.js";

export type ConnectionInput = {
  /** Platform to connect. An unknown value returns `422 invalid_request`. */
  platform: PlatformId1;
  /**
   * Required for `oauth` platforms (live keys): where the owner lands after approving, with
   * `connection_id` and `status` in the query string.
   */
  redirectUrl?: string;
  /**
   * Required for `credentials` platforms, and for Trustpilot (`domain`). Fields per platform in
   * `GET /v1/platforms`.
   */
  credentials?: Record<string, unknown>;
  /** Required for `listing_url` platforms: the public page of the listing. */
  listingUrl?: string;
  /** Your own key-value pairs, for example your client ID. */
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const connectionInputProperties: s.Shape<ConnectionInput> = {
  platform: platformId1Schema,
  redirectUrl: s.optional(s.string()),
  credentials: s.optional(s.record(s.string(), s.unknown())),
  listingUrl: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    redirectUrl: "redirect_url",
    listingUrl: "listing_url",
  },
};

export const connectionInputInternalSchema: Schema<ConnectionInput> = s.object<ConnectionInput>(
  connectionInputProperties,
  { additionalProperties: s.json() },
);

export const connectionInputSchema: Schema<ConnectionInput> = s.lazySchema(() =>
  s.object<ConnectionInput>(
    {
      ...connectionInputProperties,
      redirectUrl: s.optional(s.string().check(s.url())),
      listingUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
