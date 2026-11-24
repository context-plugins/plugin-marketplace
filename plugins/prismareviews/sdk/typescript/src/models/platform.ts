import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectFieldSchema, type ConnectField } from "./connect-field.js";
import { connectSchema, type Connect } from "./connect.js";
import { platformIdSchema, type PlatformId } from "./platform-id.js";
import { replySchema, type Reply } from "./reply.js";

/** How a platform connects and whether this workspace can connect it now. */
export type Platform = {
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
  id: PlatformId;
  /** Display name. */
  name: string;
  /** How `POST /v1/connections` connects it. */
  connect: Connect;
  /** `api`: Prisma publishes replies. `read`: read only. */
  reply: Reply;
  /** Whether your plan (or its read packs) includes it. */
  inYourPlan: boolean;
  /** Whether it is enabled for your account (some platforms open gradually). */
  available: boolean;
  /**
   * `false` while it can only be tried with test keys; a live `POST /v1/connections` returns `501
   * platform_not_available`.
   */
  liveReady: boolean;
  /** Why it isn't ready for live keys yet. */
  liveNote: string | null;
  /** What the account owner needs before starting. */
  summary: string;
  /** Short setup steps for the account owner. */
  steps: string[];
  /** Where the values come from. */
  consoleUrl: string | null;
  /** What `POST /v1/connections` expects. */
  fields: ConnectField[];
  /** A request body for `POST /v1/connections` that works with a test key. */
  example: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const platformProperties: s.Shape<Platform> = {
  id: platformIdSchema,
  name: s.string(),
  connect: connectSchema,
  reply: replySchema,
  inYourPlan: s.boolean(),
  available: s.boolean(),
  liveReady: s.boolean(),
  liveNote: s.nullable(s.string()),
  summary: s.string(),
  steps: s.array(s.string()),
  consoleUrl: s.nullable(s.string()),
  fields: s.array(s.lazy(() => connectFieldSchema)),
  example: s.record(s.string(), s.unknown()),
  _keysMap: {
    inYourPlan: "in_your_plan",
    liveReady: "live_ready",
    liveNote: "live_note",
    consoleUrl: "console_url",
  },
};

export const platformInternalSchema: Schema<Platform> = s.object<Platform>(platformProperties, {
  additionalProperties: s.json(),
});

export const platformSchema: Schema<Platform> = s.lazySchema(() =>
  s.object<Platform>(
    {
      ...platformProperties,
      consoleUrl: s.nullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
