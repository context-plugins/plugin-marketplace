import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creativesSchema, type Creatives } from "./creatives.js";
import { playChartSchema, type PlayChart } from "./play-chart.js";

export type NewPlayApp = {
  id: string;
  country: string;
  language: string;
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
  featureGraphic?: string;
  removalDate?: string;
  version?: string;
  size?: number;
  downloadsDaily?: number;
  downloadsExact?: number;
  downloadsMark?: number;
  ratingCount?: number;
  ratingValue?: number;
  reviewCount?: number;
  ratingAvg?: number;
  iap?: boolean;
  editorial?: boolean;
  chartInfo?: PlayChart;
  hosts?: string[];
  /** Url to AppstoreSpy */
  urlAppstorespy?: string;
  /** Estimated daily installs */
  ipd?: number;
  /** App's developer email */
  email?: string[];
  /** Link to App Store */
  url?: string;
  /** ... */
  policy?: string;
  /** App website */
  website?: string;
  developerId?: string;
  /** App`s ads */
  ads?: Creatives;
  /** App is advertised in networks */
  advertised?: boolean;
  /** About developer: phone number */
  aboutPhone?: string;
  /** About developer: address */
  aboutAddress?: string;
  /** Address: country */
  addressCountry?: string;
  /** App support: phone number */
  supportPhone?: string;
  /** The last transfer date as detected by AppstoreSpy */
  transferred?: string;
  /** Previous developer ID before transfer */
  previousDeveloperId?: string;
  /** Previous developer name before transfer */
  previousDeveloperName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newPlayAppSchema: Schema<NewPlayApp> = s.object<NewPlayApp>(
  {
    id: s.string(),
    country: s.string(),
    language: s.string(),
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
    featureGraphic: s.optional(s.string()),
    removalDate: s.optional(s.dateOnly()),
    version: s.optional(s.string()),
    size: s.optional(s.float64()),
    downloadsDaily: s.optional(s.int()),
    downloadsExact: s.optional(s.int()),
    downloadsMark: s.optional(s.int()),
    ratingCount: s.optional(s.int()),
    ratingValue: s.optional(s.float64()),
    reviewCount: s.optional(s.int()),
    ratingAvg: s.optional(s.float64()),
    iap: s.optional(s.boolean()),
    editorial: s.optional(s.boolean()),
    chartInfo: s.optional(s.lazy(() => playChartSchema)),
    hosts: s.optional(s.array(s.string())),
    urlAppstorespy: s.optional(s.string()),
    ipd: s.optional(s.int()),
    email: s.optional(s.array(s.string())),
    url: s.optional(s.string()),
    policy: s.optional(s.string()),
    website: s.optional(s.string()),
    developerId: s.optional(s.string()),
    ads: s.optional(s.lazy(() => creativesSchema)),
    advertised: s.optional(s.boolean()),
    aboutPhone: s.optional(s.string()),
    aboutAddress: s.optional(s.string()),
    addressCountry: s.optional(s.string()),
    supportPhone: s.optional(s.string()),
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
      featureGraphic: "feature_graphic",
      removalDate: "removal_date",
      downloadsDaily: "downloads_daily",
      downloadsExact: "downloads_exact",
      downloadsMark: "downloads_mark",
      ratingCount: "rating_count",
      ratingValue: "rating_value",
      reviewCount: "review_count",
      ratingAvg: "rating_avg",
      chartInfo: "chart_info",
      urlAppstorespy: "url_appstorespy",
      developerId: "developer_id",
      aboutPhone: "about_phone",
      aboutAddress: "about_address",
      addressCountry: "address_country",
      supportPhone: "support_phone",
      previousDeveloperId: "previous_developer_id",
      previousDeveloperName: "previous_developer_name",
    },
  },
  { additionalProperties: s.json() },
);
