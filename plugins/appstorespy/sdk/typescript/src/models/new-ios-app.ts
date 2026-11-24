import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creativesSchema, type Creatives } from "./creatives.js";
import { iosChartSchema, type IosChart } from "./ios-chart.js";

export type NewIosApp = {
  id?: string;
  bundle?: string;
  name?: string;
  descriptionFull?: string;
  published?: boolean;
  listingVisible?: boolean;
  category?: string;
  categoryType?: string;
  revenueMonth?: number;
  revenueLifetime?: number;
  downloadsMonth?: number;
  downloadsLifetime?: number;
  releaseDate?: string;
  updateDate?: string;
  developerName?: string;
  descriptionShort?: string;
  whatsnew?: string;
  icon?: string;
  video?: string;
  screenshots?: string[];
  /** iPhone Duo inner display screenshots in the specified language, null when the app has none */
  screenshotsDuoInner?: string[];
  /** iPhone Duo outer display screenshots in the specified language, null when the app has none */
  screenshotsDuoOuter?: string[];
  removalDate?: string;
  version?: string;
  size?: number;
  ratingCount?: number;
  ratingValue?: number;
  reviewCount?: number;
  ratingAvg?: number;
  iap?: boolean;
  chartInfo?: IosChart;
  /** Url to AppstoreSpy */
  urlAppstorespy?: string;
  /** App's developer email */
  email?: string[];
  /** Link to App Store */
  url?: string;
  /** ... */
  policy?: string;
  /** App's website */
  website?: string;
  /** App's developer hosts */
  hosts?: string[];
  /** ... */
  support?: string;
  developerId?: string;
  /** App`s ads */
  ads?: Creatives;
  /** App is advertised in networks */
  advertised?: boolean;
  /** Copyright */
  copyright?: string;
  /** Seller */
  seller?: string;
  /** The last transfer date as detected by AppstoreSpy */
  transferred?: string;
  /** Previous developer ID before transfer */
  previousDeveloperId?: string;
  /** Previous developer name before transfer */
  previousDeveloperName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newIosAppSchema: Schema<NewIosApp> = s.object<NewIosApp>(
  {
    id: s.optional(s.string()),
    bundle: s.optional(s.string()),
    name: s.optional(s.string()),
    descriptionFull: s.optional(s.string()),
    published: s.optional(s.boolean()),
    listingVisible: s.optional(s.boolean()),
    category: s.optional(s.string()),
    categoryType: s.optional(s.string()),
    revenueMonth: s.optional(s.int()),
    revenueLifetime: s.optional(s.int()),
    downloadsMonth: s.optional(s.int()),
    downloadsLifetime: s.optional(s.int()),
    releaseDate: s.optional(s.dateOnly()),
    updateDate: s.optional(s.dateOnly()),
    developerName: s.optional(s.string()),
    descriptionShort: s.optional(s.string()),
    whatsnew: s.optional(s.string()),
    icon: s.optional(s.string()),
    video: s.optional(s.string()),
    screenshots: s.optional(s.array(s.string())),
    screenshotsDuoInner: s.optional(s.array(s.string())),
    screenshotsDuoOuter: s.optional(s.array(s.string())),
    removalDate: s.optional(s.dateOnly()),
    version: s.optional(s.string()),
    size: s.optional(s.float64()),
    ratingCount: s.optional(s.int()),
    ratingValue: s.optional(s.float64()),
    reviewCount: s.optional(s.int()),
    ratingAvg: s.optional(s.float64()),
    iap: s.optional(s.boolean()),
    chartInfo: s.optional(s.lazy(() => iosChartSchema)),
    urlAppstorespy: s.optional(s.string()),
    email: s.optional(s.array(s.string())),
    url: s.optional(s.string()),
    policy: s.optional(s.string()),
    website: s.optional(s.string()),
    hosts: s.optional(s.array(s.string())),
    support: s.optional(s.string()),
    developerId: s.optional(s.string()),
    ads: s.optional(s.lazy(() => creativesSchema)),
    advertised: s.optional(s.boolean()),
    copyright: s.optional(s.string()),
    seller: s.optional(s.string()),
    transferred: s.optional(s.string()),
    previousDeveloperId: s.optional(s.string()),
    previousDeveloperName: s.optional(s.string()),
    _keysMap: {
      descriptionFull: "description_full",
      listingVisible: "listing_visible",
      categoryType: "category_type",
      revenueMonth: "revenue_month",
      revenueLifetime: "revenue_lifetime",
      downloadsMonth: "downloads_month",
      downloadsLifetime: "downloads_lifetime",
      releaseDate: "release_date",
      updateDate: "update_date",
      developerName: "developer_name",
      descriptionShort: "description_short",
      screenshotsDuoInner: "screenshots_duo_inner",
      screenshotsDuoOuter: "screenshots_duo_outer",
      removalDate: "removal_date",
      ratingCount: "rating_count",
      ratingValue: "rating_value",
      reviewCount: "review_count",
      ratingAvg: "rating_avg",
      chartInfo: "chart_info",
      urlAppstorespy: "url_appstorespy",
      developerId: "developer_id",
      previousDeveloperId: "previous_developer_id",
      previousDeveloperName: "previous_developer_name",
    },
  },
  { additionalProperties: s.json() },
);
