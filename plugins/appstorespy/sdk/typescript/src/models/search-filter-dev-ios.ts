import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { iosCategorySchema, type IosCategory } from "./ios-category.js";
import { typeEnumSchema, type TypeEnum } from "./type-enum.js";
import { valueRangeSchema, type ValueRange } from "./value-range.js";

export type SearchFilterDevIos = {
  /**
   * One or more country codes. Country of the developer's registered address as disclosed on the
   * store listing (ISO 3166-1 alpha-2). May differ from where the company actually operates.
   */
  hqCountry?: string[];
  /** Dominant category type of the developer's apps */
  type?: TypeEnum;
  /** Monthly revenue estimate range, USD */
  revenue?: ValueRange;
  /** Monthly downloads estimate range */
  downloads?: ValueRange;
  /** Total apps count range */
  totalApps?: ValueRange;
  /**
   * One or more publisher ids. Unified cross-store publisher id; the same value appears on the iOS
   * and Play developer accounts of one company. Null when no mapping is known.
   */
  amPublisherId?: string[];
  /**
   * One or more publisher ids. Store-specific publisher id from the download-estimates provider.
   * Null when no mapping is known.
   */
  stPublisherId?: string[];
  /** Dominant category of the developer's apps */
  category?: IosCategory;
  /**
   * One or more exact App Store seller legal names. Matches accounts whose seller field contains
   * any of the given values.
   */
  sellerName?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchFilterDevIosSchema: Schema<SearchFilterDevIos> = s.object<SearchFilterDevIos>(
  {
    hqCountry: s.optional(s.array(s.string())),
    type: s.optional(s.lazy(() => typeEnumSchema)),
    revenue: s.optional(s.lazy(() => valueRangeSchema)),
    downloads: s.optional(s.lazy(() => valueRangeSchema)),
    totalApps: s.optional(s.lazy(() => valueRangeSchema)),
    amPublisherId: s.optional(s.array(s.string())),
    stPublisherId: s.optional(s.array(s.string())),
    category: s.optional(s.lazy(() => iosCategorySchema)),
    sellerName: s.optional(s.array(s.string())),
    _keysMap: {
      hqCountry: "hq_country",
      totalApps: "total_apps",
      amPublisherId: "am_publisher_id",
      stPublisherId: "st_publisher_id",
      sellerName: "seller_name",
    },
  },
  { additionalProperties: s.json() },
);
