import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creativesSchema, type Creatives } from "./creatives.js";

export type IosApp = {
  /** App ID */
  id?: string;
  /** App bundle */
  bundle?: string;
  /** Requested country */
  country?: string;
  /** Requested language */
  lang?: string;
  /** Published */
  published?: boolean;
  /** Availability in the specified country */
  available?: boolean;
  /** Available in countries */
  availableIn?: Record<string, unknown>[];
  /** Not available in countries */
  availableNot?: Record<string, unknown>[];
  /** App category. */
  category?: string[];
  /** App type - APP | GAME */
  type?: string;
  /** App's developer email */
  emails?: string[];
  /** App's website */
  website?: string;
  /** Link to App Store */
  url?: string;
  /** ... */
  privacyPolicy?: string;
  /** App version. */
  version?: string;
  /** Date of release - YYYY-MM-DD */
  released?: string;
  /** Date of update - YYYY-MM-DD */
  updated?: string;
  /** App's size in bytes. */
  size?: number;
  /** Inapp advertisement */
  iap?: boolean;
  /** App's developer ID */
  developerId?: string;
  /** Developer name */
  developerName?: string;
  /** Number of ratings */
  ratingCount?: number;
  /** Rating value in requested country */
  ratingValue?: number;
  /** Weighted average Rating value */
  ratingAvg?: number;
  revenue?: number;
  downloads?: number;
  /** App's devices list */
  devices?: Record<string, unknown>[];
  arcade?: boolean;
  /** App's name on requested language */
  name?: string;
  /** App's short description on requested language */
  short?: string;
  /** App's new version changes on requested language */
  whatsnew?: string;
  /** App's full description on requested language */
  description?: string;
  /** App's image */
  icon?: string;
  /** App's trailer */
  trailer?: string;
  /** App's languages list */
  languages?: Record<string, unknown>[];
  /** Last crawled date */
  crawled?: string;
  /** Date of remove app */
  removed?: string;
  /** How long does the application exist in days */
  age?: number;
  /** Screenshots in the specified language */
  screenshots?: string[];
  /** iPhone Duo inner display screenshots in the specified language, null when the app has none */
  screenshotsDuoInner?: string[];
  /** iPhone Duo outer display screenshots in the specified language, null when the app has none */
  screenshotsDuoOuter?: string[];
  /** Top 5 revenue country */
  topCountriesRevenue?: string[];
  /** Top 5 downloads country */
  topCountriesDownloads?: string[];
  /** countries */
  countriesList?: string[];
  /** Url to AppstoreSpy */
  urlAppstorespy?: string;
  /** App`s ads */
  ads?: Creatives;
  /** App is advertised in networks */
  advertised?: boolean;
  /** The last transfer date as detected by AppstoreSpy */
  transferred?: string;
  /** Previous developer ID before transfer */
  previousDeveloperId?: string;
  /** Previous developer name before transfer */
  previousDeveloperName?: string;
  /** Copyright */
  copyright?: string;
  /** Seller */
  seller?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosAppSchema: Schema<IosApp> = s.object<IosApp>(
  {
    id: s.optional(s.string()),
    bundle: s.optional(s.string()),
    country: s.optional(s.string()),
    lang: s.optional(s.string()),
    published: s.optional(s.boolean()),
    available: s.optional(s.boolean()),
    availableIn: s.optional(s.array(s.record(s.string(), s.unknown()))),
    availableNot: s.optional(s.array(s.record(s.string(), s.unknown()))),
    category: s.optional(s.array(s.string())),
    type: s.optional(s.string()),
    emails: s.optional(s.array(s.string())),
    website: s.optional(s.string()),
    url: s.optional(s.string()),
    privacyPolicy: s.optional(s.string()),
    version: s.optional(s.string()),
    released: s.optional(s.string()),
    updated: s.optional(s.string()),
    size: s.optional(s.int()),
    iap: s.optional(s.boolean()),
    developerId: s.optional(s.string()),
    developerName: s.optional(s.string()),
    ratingCount: s.optional(s.int()),
    ratingValue: s.optional(s.float64()),
    ratingAvg: s.optional(s.float64()),
    revenue: s.optional(s.int()),
    downloads: s.optional(s.int()),
    devices: s.optional(s.array(s.record(s.string(), s.unknown()))),
    arcade: s.optional(s.boolean()),
    name: s.optional(s.string()),
    short: s.optional(s.string()),
    whatsnew: s.optional(s.string()),
    description: s.optional(s.string()),
    icon: s.optional(s.string()),
    trailer: s.optional(s.string()),
    languages: s.optional(s.array(s.record(s.string(), s.unknown()))),
    crawled: s.optional(s.string()),
    removed: s.optional(s.string()),
    age: s.optional(s.int()),
    screenshots: s.optional(s.array(s.string())),
    screenshotsDuoInner: s.optional(s.array(s.string())),
    screenshotsDuoOuter: s.optional(s.array(s.string())),
    topCountriesRevenue: s.optional(s.array(s.string())),
    topCountriesDownloads: s.optional(s.array(s.string())),
    countriesList: s.optional(s.array(s.string())),
    urlAppstorespy: s.optional(s.string()),
    ads: s.optional(s.lazy(() => creativesSchema)),
    advertised: s.optional(s.boolean()),
    transferred: s.optional(s.string()),
    previousDeveloperId: s.optional(s.string()),
    previousDeveloperName: s.optional(s.string()),
    copyright: s.optional(s.string()),
    seller: s.optional(s.string()),
    _keysMap: {
      availableIn: "available_in",
      availableNot: "available_not",
      privacyPolicy: "privacy_policy",
      developerId: "developer_id",
      developerName: "developer_name",
      ratingCount: "rating_count",
      ratingValue: "rating_value",
      ratingAvg: "rating_avg",
      screenshotsDuoInner: "screenshots_duo_inner",
      screenshotsDuoOuter: "screenshots_duo_outer",
      topCountriesRevenue: "top_countries_revenue",
      topCountriesDownloads: "top_countries_downloads",
      countriesList: "countries_list",
      urlAppstorespy: "url_appstorespy",
      previousDeveloperId: "previous_developer_id",
      previousDeveloperName: "previous_developer_name",
    },
  },
  { additionalProperties: s.json() },
);
