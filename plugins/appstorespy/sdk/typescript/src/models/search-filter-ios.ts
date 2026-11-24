import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chartFilterIosSchema, type ChartFilterIos } from "./chart-filter-ios.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { iosCategorySchema, type IosCategory } from "./ios-category.js";
import { typeEnumSchema, type TypeEnum } from "./type-enum.js";
import { valueRangeSchema, type ValueRange } from "./value-range.js";

export type SearchFilterIos = {
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
  /** An enumeration. */
  category?: IosCategory;
  chartFilter?: ChartFilterIos;
  developerName?: string;
  ratingAvg?: ValueRange;
  reviewCount?: ValueRange;
  copyright?: string;
  seller?: string;
  /** Similars apps */
  similarApps?: string;
  /** Apps with app in similar`s lists */
  reverseSimilarApps?: string;
  /** Previous developer ID before transfer */
  previousDeveloperId?: string;
  /** Previous developer name before transfer */
  previousDeveloperName?: string;
  /** Pre-order apps only (True); matches apps whose release date is still in the future */
  preOrder?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchFilterIosSchema: Schema<SearchFilterIos> = s.object<SearchFilterIos>(
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
    category: s.optional(s.lazy(() => iosCategorySchema)),
    chartFilter: s.optional(s.lazy(() => chartFilterIosSchema)),
    developerName: s.optional(s.string()),
    ratingAvg: s.optional(s.lazy(() => valueRangeSchema)),
    reviewCount: s.optional(s.lazy(() => valueRangeSchema)),
    copyright: s.optional(s.string()),
    seller: s.optional(s.string()),
    similarApps: s.optional(s.string()),
    reverseSimilarApps: s.optional(s.string()),
    previousDeveloperId: s.optional(s.string()),
    previousDeveloperName: s.optional(s.string()),
    preOrder: s.optional(s.boolean()),
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
      chartFilter: "chart_filter",
      developerName: "developer_name",
      ratingAvg: "rating_avg",
      reviewCount: "review_count",
      similarApps: "similar_apps",
      reverseSimilarApps: "reverse_similar_apps",
      previousDeveloperId: "previous_developer_id",
      previousDeveloperName: "previous_developer_name",
      preOrder: "pre_order",
    },
  },
  { additionalProperties: s.json() },
);
