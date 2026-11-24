import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformIdSchema, type PlatformId } from "./platform-id.js";
import {
  statusPrismaReviewsLocationsApiSchema,
  type StatusPrismaReviewsLocationsApi,
} from "./status-prisma-reviews-locations-api.js";
import { syncSchema, type Sync } from "./sync.js";
import { reviewLink1Schema, type ReviewLink1 } from "./unions/review-link1.js";

export type LocationRefresh = {
  /** Location ID (`loc_…`). */
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
  /** The connection that created it (`con_…`). */
  connectionId: string;
  /** Name on the platform. For listing URL platforms, the listing URL. */
  name: string;
  /** Address for places. For App Store apps, the bundle ID. */
  address: string | null;
  /** Public page of the location, app or listing, when known. */
  url: string | null;
  /** The platform's own ID. */
  externalId: string;
  status: StatusPrismaReviewsLocationsApi;
  /** Last time Prisma checked it for reviews. `null` until the first sync finishes. */
  lastSyncedAt: Date | null;
  /** When the next check is scheduled. `null` once disconnected. */
  nextSyncAt: Date | null;
  /**
   * The link to send customers to ask for a review (email, SMS, QR code). `type: "write_review"`
   * opens the platform's review form; `listing` is the public page with its review button. `null`
   * where only verified buyers or guests can review (Booking.com, eBay, Etsy, shop-review apps).
   */
  reviewLink: ReviewLink1;
  /**
   * Sync health: tells "no new reviews" apart from "the check failed". After 3 failed checks in a
   * row Prisma sends `location.sync_failed`, and `location.sync_recovered` on the next successful
   * one.
   */
  sync: Sync;
  /** @default "queued" */
  refresh?: "queued";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationRefreshSchema: Schema<LocationRefresh> = s.object<LocationRefresh>(
  {
    id: s.string(),
    platform: platformIdSchema,
    connectionId: s.string(),
    name: s.string(),
    address: s.nullable(s.string()),
    url: s.nullable(s.string()),
    externalId: s.string(),
    status: statusPrismaReviewsLocationsApiSchema,
    lastSyncedAt: s.nullable(s.dateTime()),
    nextSyncAt: s.nullable(s.dateTime()),
    reviewLink: reviewLink1Schema,
    sync: syncSchema,
    refresh: s.defaulted(s.literal("queued"), "queued"),
    _keysMap: {
      connectionId: "connection_id",
      externalId: "external_id",
      lastSyncedAt: "last_synced_at",
      nextSyncAt: "next_sync_at",
      reviewLink: "review_link",
    },
  },
  { additionalProperties: s.json() },
);
