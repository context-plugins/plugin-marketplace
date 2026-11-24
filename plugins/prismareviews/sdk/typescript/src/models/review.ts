import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformIdSchema, type PlatformId } from "./platform-id.js";
import {
  replyPrismaReviewsRepliesApiSchema,
  type ReplyPrismaReviewsRepliesApi,
} from "./reply-prisma-reviews-replies-api.js";

/** One customer review, in the same shape on every platform. */
export type Review = {
  /** Review ID (`rev_…`). */
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
  /** The location the review belongs to (`loc_…`). */
  locationId: string;
  /** 1 to 5 stars. `null` if the platform gave no rating. */
  rating: number | null;
  /** Review title, on platforms that have one. */
  title: string | null;
  /** Review body. `null` for rating-only reviews. */
  text: string | null;
  /** Display name as shown by the platform. */
  author: string | null;
  /** Language code when the platform provides one. */
  language: string | null;
  /**
   * Public link to the review when the platform provides one. On read-only platforms, where to
   * answer it.
   */
  url: string | null;
  /** When the review was written on the platform. */
  createdAt: Date;
  /** When it was last edited on the platform. */
  updatedAt: Date;
  /** The business reply, or `null`. */
  reply: ReplyPrismaReviewsRepliesApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reviewProperties: s.Shape<Review> = {
  id: s.string(),
  platform: platformIdSchema,
  locationId: s.string(),
  rating: s.nullable(s.int()),
  title: s.nullable(s.string()),
  text: s.nullable(s.string()),
  author: s.nullable(s.string()),
  language: s.nullable(s.string()),
  url: s.nullable(s.string()),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  reply: s.nullable(s.lazy(() => replyPrismaReviewsRepliesApiSchema)),
  _keysMap: {
    locationId: "location_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const reviewInternalSchema: Schema<Review> = s.object<Review>(reviewProperties, {
  additionalProperties: s.json(),
});

export const reviewSchema: Schema<Review> = s.lazySchema(() =>
  s.object<Review>(
    {
      ...reviewProperties,
      rating: s.nullable(s.int().check(s.gte(1), s.lte(5))),
      url: s.nullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
