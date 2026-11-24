import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chartFilterPlaySchema, type ChartFilterPlay } from "./chart-filter-play.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { playCategorySchema, type PlayCategory } from "./play-category.js";
import { typeEnumSchema, type TypeEnum } from "./type-enum.js";
import { valueRangeSchema, type ValueRange } from "./value-range.js";

export type SearchFilterPlay = {
  id?: string[];
  name?: string;
  published?: boolean;
  /** An enumeration. */
  categoryType?: TypeEnum;
  revenueMonth?: ValueRange;
  downloadsMonth?: ValueRange;
  releaseDate?: DateRange;
  updateDate?: DateRange;
  ratingCount?: ValueRange;
  developer?: string;
  developerId?: string;
  editorial?: boolean;
  /** In app purchases */
  iap?: boolean;
  activeCountries?: string[];
  descriptionFull?: string;
  descriptionShort?: string;
  /** Updates in app */
  whatsnew?: string;
  /** Hosts */
  hosts?: string;
  withAds?: boolean;
  advertised?: boolean;
  /** Collection ID */
  collectionId?: string;
  discovered?: string[];
  /** Website */
  website?: string;
  /** App bundle ID(s); accepts a single string or a list */
  bundle?: string[];
  /** Whether the app has been transferred to a new developer at least once */
  transferred?: boolean;
  /** Date range (gte/lte) of the last developer transfer */
  transferDate?: DateRange;
  /** Date range (gte/lte) of app removal from the store; matches removed (unavailable) apps */
  removalDate?: DateRange;
  /** Category of app */
  category?: PlayCategory;
  /** Installs */
  downloadsMark?: number;
  /** Daily downloads or Daily installs */
  downloadsDaily?: ValueRange;
  /** Exact installs */
  downloadsExact?: ValueRange;
  /** Exact installs(deprecated) */
  installsExact?: ValueRange;
  /** Count of reviews */
  reviewCount?: ValueRange;
  /** Top Charts */
  chartFilter?: ChartFilterPlay;
  /** Similars apps */
  similarApps?: string;
  /** Apps with app in similar`s lists */
  reverseSimilarApps?: string;
  /** Average rating */
  ratingAvg?: ValueRange;
  /** Developer name */
  developerName?: string;
  /** Previous developer ID before transfer */
  previousDeveloperId?: string;
  /** Previous developer name before transfer */
  previousDeveloperName?: string;
  /**
   * Pre-registration games only (True); matches apps in the pre-registration state in at least one
   * tracked country
   */
  preRegister?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchFilterPlaySchema: Schema<SearchFilterPlay> = s.object<SearchFilterPlay>(
  {
    id: s.optional(s.array(s.string())),
    name: s.optional(s.string()),
    published: s.optional(s.boolean()),
    categoryType: s.optional(s.lazy(() => typeEnumSchema)),
    revenueMonth: s.optional(s.lazy(() => valueRangeSchema)),
    downloadsMonth: s.optional(s.lazy(() => valueRangeSchema)),
    releaseDate: s.optional(s.lazy(() => dateRangeSchema)),
    updateDate: s.optional(s.lazy(() => dateRangeSchema)),
    ratingCount: s.optional(s.lazy(() => valueRangeSchema)),
    developer: s.optional(s.string()),
    developerId: s.optional(s.string()),
    editorial: s.optional(s.boolean()),
    iap: s.optional(s.boolean()),
    activeCountries: s.optional(s.array(s.string())),
    descriptionFull: s.optional(s.string()),
    descriptionShort: s.optional(s.string()),
    whatsnew: s.optional(s.string()),
    hosts: s.optional(s.string()),
    withAds: s.optional(s.boolean()),
    advertised: s.optional(s.boolean()),
    collectionId: s.optional(s.string()),
    discovered: s.optional(s.array(s.dateOnly())),
    website: s.optional(s.string()),
    bundle: s.optional(s.array(s.string())),
    transferred: s.optional(s.boolean()),
    transferDate: s.optional(s.lazy(() => dateRangeSchema)),
    removalDate: s.optional(s.lazy(() => dateRangeSchema)),
    category: s.optional(s.lazy(() => playCategorySchema)),
    downloadsMark: s.optional(s.int()),
    downloadsDaily: s.optional(s.lazy(() => valueRangeSchema)),
    downloadsExact: s.optional(s.lazy(() => valueRangeSchema)),
    installsExact: s.optional(s.lazy(() => valueRangeSchema)),
    reviewCount: s.optional(s.lazy(() => valueRangeSchema)),
    chartFilter: s.optional(s.lazy(() => chartFilterPlaySchema)),
    similarApps: s.optional(s.string()),
    reverseSimilarApps: s.optional(s.string()),
    ratingAvg: s.optional(s.lazy(() => valueRangeSchema)),
    developerName: s.optional(s.string()),
    previousDeveloperId: s.optional(s.string()),
    previousDeveloperName: s.optional(s.string()),
    preRegister: s.optional(s.boolean()),
    _keysMap: {
      categoryType: "category_type",
      revenueMonth: "revenue_month",
      downloadsMonth: "downloads_month",
      releaseDate: "release_date",
      updateDate: "update_date",
      ratingCount: "rating_count",
      developerId: "developer_id",
      activeCountries: "active_countries",
      descriptionFull: "description_full",
      descriptionShort: "description_short",
      withAds: "with_ads",
      collectionId: "collection_id",
      transferDate: "transfer_date",
      removalDate: "removal_date",
      downloadsMark: "downloads_mark",
      downloadsDaily: "downloads_daily",
      downloadsExact: "downloads_exact",
      installsExact: "installs_exact",
      reviewCount: "review_count",
      chartFilter: "chart_filter",
      similarApps: "similar_apps",
      reverseSimilarApps: "reverse_similar_apps",
      ratingAvg: "rating_avg",
      developerName: "developer_name",
      previousDeveloperId: "previous_developer_id",
      previousDeveloperName: "previous_developer_name",
      preRegister: "pre_register",
    },
  },
  { additionalProperties: s.json() },
);
