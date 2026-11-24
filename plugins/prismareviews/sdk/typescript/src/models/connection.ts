import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformIdSchema, type PlatformId } from "./platform-id.js";
import { statusSchema, type Status } from "./status.js";

/**
 * The access a business gave Prisma to its account on one platform. Credentials and tokens are
 * never returned.
 */
export type Connection = {
  /** Connection ID (`con_…`). */
  id: string;
  /**
   * Platform ID.
   *
   * | ID | Platform | Connects with | Replies |
   * | --- | --- | --- | --- |
   * | `google` | Google Business Profile | oauth | by API |
   * | `app_store` | App Store | credentials | by API |
   * | `google_play` | Google Play | credentials | by API |
   * | `judge_me` | Judge.me | credentials | by API |
   * | `trustpilot` | Trustpilot | oauth | by API |
   * | `google_maps` | Google Maps | listing_url | read only |
   * | `yelp` | Yelp | listing_url | read only |
   * | `tripadvisor` | Tripadvisor | listing_url | read only |
   * | `booking` | Booking.com | listing_url | read only |
   * | `yotpo` | Yotpo | credentials | read only |
   * | `reviews_io` | REVIEWS.io | credentials | read only |
   * | `g2` | G2 | credentials | read only |
   * | `ebay` | eBay | oauth | by API |
   * | `etsy` | Etsy | listing_url | read only |
   * | `steam` | Steam | listing_url | read only |
   * | `okendo` | Okendo | credentials | read only |
   * | `feefo` | Feefo | credentials | read only |
   * | `trusted_shops` | Trusted Shops | credentials | by API |
   * | `ekomi` | eKomi | credentials | by API |
   * | `loox` | Loox | credentials | read only |
   * | `proven_expert` | ProvenExpert | credentials | read only |
   * | `shopper_approved` | Shopper Approved | credentials | read only |
   * | `wordpress` | WordPress.org | listing_url | read only |
   * | `appexchange` | Salesforce AppExchange | listing_url | read only |
   * | `facebook` | Facebook | listing_url | read only |
   * | `opentable` | OpenTable | listing_url | read only |
   * | `doordash` | DoorDash | listing_url | read only |
   * | `angi` | Angi | listing_url | read only |
   * | `checkatrade` | Checkatrade | listing_url | read only |
   * | `avvo` | Avvo | listing_url | read only |
   * | `capterra` | Capterra | listing_url | read only |
   * | `apartments` | Apartments.com | listing_url | read only |
   * | `gartner` | Gartner Peer Insights | listing_url | read only |
   * | `healthgrades` | Healthgrades | listing_url | read only |
   * | `vitals` | Vitals | listing_url | read only |
   * | `classpass` | ClassPass | listing_url | read only |
   */
  platform: PlatformId;
  /**
   * `pending` (waiting for the owner to approve OAuth), `active`, `reauth_required` (the platform
   * rejected the stored token or key) or `disconnected`.
   */
  status: Status;
  /** Your own key-value pairs, returned as sent. */
  metadata: Record<string, unknown>;
  /** When it was created. */
  createdAt: Date;
  /** When it last changed. */
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionSchema: Schema<Connection> = s.object<Connection>(
  {
    id: s.string(),
    platform: platformIdSchema,
    status: statusSchema,
    metadata: s.record(s.string(), s.unknown()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
