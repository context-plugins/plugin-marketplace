import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creativesSchema, type Creatives } from "./creatives.js";

export type PlayApp = {
  /** The app package name */
  id?: string;
  /** Bundle(the same as id) */
  bundle?: string;
  /** Published */
  published?: boolean;
  /** Available in countries */
  availableIn?: Record<string, unknown>[];
  /** Not available in countries */
  availableNot?: Record<string, unknown>[];
  /** Country for which specific fields returned */
  country?: string;
  /** The language in which the app metadata is returned */
  lang?: string;
  /** Translations detected by AppstoreSpy */
  languages?: Record<string, unknown>[];
  /** Category type: app or game */
  type?: string;
  /** Category ID. Refer to the Google Play categories for more information */
  category?: string;
  /** Name in the specified language */
  name?: string;
  /** Short description in the specified language */
  short?: string;
  /** Description in the specified language */
  description?: string;
  /** Icon in the specified language */
  icon?: string;
  /** Screenshots in the specified language */
  screenshots?: string[];
  /** Video trailer Youtube link in the specified language */
  trailer?: string;
  /** Feature in the specified language */
  feature?: string;
  /** What's new in the specified language */
  whatsnew?: string;
  /** Developer ID */
  developerId?: string;
  /** Developer name */
  developerName?: string;
  /** Contact email */
  emails?: string[];
  /** Website */
  website?: string;
  /** Privacy policy link */
  privacyPolicy?: string;
  /** Link to Google Play */
  url?: string;
  /** Editor's choice */
  editorial?: boolean;
  /** App offers in-app purchases */
  iap?: boolean;
  /** App`s ads */
  ads?: Creatives;
  /** App is advertised in networks */
  advertised?: boolean;
  /** Installs checkpoint */
  installs?: string;
  /** Accurate installs value */
  installsExact?: number;
  /** Estimated daily installs */
  ipd?: number;
  /** Total ratings */
  ratingCount?: number;
  /** Rating value in the specified country */
  ratingValue?: number;
  /** Number of reviews in the specified country */
  reviewCount?: number;
  /** Weighted average Rating value */
  ratingAvg?: number;
  /** Total reviews as detected by AppstoreSpy */
  reviewTotal?: number;
  revenue?: number;
  downloads?: number;
  /** App version, optional if app has multiple versions */
  version?: string;
  /** App size in bytes, optional if app has multiple versions */
  size?: number;
  /** The last time the app was updated on Google Play */
  updated?: string;
  /** The release date as detected by AppstoreSpy */
  released?: string;
  /** Age in days as detected by AppstoreSpy */
  age?: number;
  /** The removal date as detected by AppstoreSpy */
  removed?: string;
  /** The last crawled time by AppstoreSpy */
  crawled?: string;
  /** Top 5 revenue country */
  topCountriesRevenue?: string[];
  /** Top 5 downloads country */
  topCountriesDownloads?: string[];
  /** Hosts */
  hosts?: string[];
  /** countries */
  countriesList?: string[];
  /** Url to AppstoreSpy */
  urlAppstorespy?: string;
  /** The last transfer date as detected by AppstoreSpy */
  transferred?: string;
  /** Previous developer ID before transfer */
  previousDeveloperId?: string;
  /** Previous developer name before transfer */
  previousDeveloperName?: string;
  /** About developer: phone number */
  aboutPhone?: string;
  /** About developer: address */
  aboutAddress?: string;
  /** App support: phone number */
  supportPhone?: string;
  /** Address: country */
  addressCountry?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playAppSchema: Schema<PlayApp> = s.object<PlayApp>(
  {
    id: s.optional(s.string()),
    bundle: s.optional(s.string()),
    published: s.optional(s.boolean()),
    availableIn: s.optional(s.array(s.record(s.string(), s.unknown()))),
    availableNot: s.optional(s.array(s.record(s.string(), s.unknown()))),
    country: s.optional(s.string()),
    lang: s.optional(s.string()),
    languages: s.optional(s.array(s.record(s.string(), s.unknown()))),
    type: s.optional(s.string()),
    category: s.optional(s.string()),
    name: s.optional(s.string()),
    short: s.optional(s.string()),
    description: s.optional(s.string()),
    icon: s.optional(s.string()),
    screenshots: s.optional(s.array(s.string())),
    trailer: s.optional(s.string()),
    feature: s.optional(s.string()),
    whatsnew: s.optional(s.string()),
    developerId: s.optional(s.string()),
    developerName: s.optional(s.string()),
    emails: s.optional(s.array(s.string())),
    website: s.optional(s.string()),
    privacyPolicy: s.optional(s.string()),
    url: s.optional(s.string()),
    editorial: s.optional(s.boolean()),
    iap: s.optional(s.boolean()),
    ads: s.optional(s.lazy(() => creativesSchema)),
    advertised: s.optional(s.boolean()),
    installs: s.optional(s.string()),
    installsExact: s.optional(s.int()),
    ipd: s.optional(s.int()),
    ratingCount: s.optional(s.int()),
    ratingValue: s.optional(s.float64()),
    reviewCount: s.optional(s.int()),
    ratingAvg: s.optional(s.float64()),
    reviewTotal: s.optional(s.float64()),
    revenue: s.optional(s.int()),
    downloads: s.optional(s.int()),
    version: s.optional(s.string()),
    size: s.optional(s.int()),
    updated: s.optional(s.string()),
    released: s.optional(s.string()),
    age: s.optional(s.int()),
    removed: s.optional(s.string()),
    crawled: s.optional(s.string()),
    topCountriesRevenue: s.optional(s.array(s.string())),
    topCountriesDownloads: s.optional(s.array(s.string())),
    hosts: s.optional(s.array(s.string())),
    countriesList: s.optional(s.array(s.string())),
    urlAppstorespy: s.optional(s.string()),
    transferred: s.optional(s.string()),
    previousDeveloperId: s.optional(s.string()),
    previousDeveloperName: s.optional(s.string()),
    aboutPhone: s.optional(s.string()),
    aboutAddress: s.optional(s.string()),
    supportPhone: s.optional(s.string()),
    addressCountry: s.optional(s.string()),
    _keysMap: {
      availableIn: "available_in",
      availableNot: "available_not",
      developerId: "developer_id",
      developerName: "developer_name",
      privacyPolicy: "privacy_policy",
      installsExact: "installs_exact",
      ratingCount: "rating_count",
      ratingValue: "rating_value",
      reviewCount: "review_count",
      ratingAvg: "rating_avg",
      reviewTotal: "review_total",
      topCountriesRevenue: "top_countries_revenue",
      topCountriesDownloads: "top_countries_downloads",
      countriesList: "countries_list",
      urlAppstorespy: "url_appstorespy",
      previousDeveloperId: "previous_developer_id",
      previousDeveloperName: "previous_developer_name",
      aboutPhone: "about_phone",
      aboutAddress: "about_address",
      supportPhone: "support_phone",
      addressCountry: "address_country",
    },
  },
  { additionalProperties: s.json() },
);
