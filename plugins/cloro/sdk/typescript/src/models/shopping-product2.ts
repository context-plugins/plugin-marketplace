import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsMetaSchema, type AnalyticsMeta } from "./analytics-meta.js";
import { attribute1Schema, type Attribute1 } from "./attribute1.js";
import { productDetailsSchema, type ProductDetails } from "./product-details.js";
import { productLookupDataSchema, type ProductLookupData } from "./product-lookup-data.js";
import { productLookupKeySchema, type ProductLookupKey } from "./product-lookup-key.js";
import { ratingGroupedCitationSchema, type RatingGroupedCitation } from "./rating-grouped-citation.js";
import { shoppingOfferSchema, type ShoppingOffer } from "./shopping-offer.js";
import { showcaseMetadataSchema, type ShowcaseMetadata } from "./showcase-metadata.js";

/** Individual product information */
export type ShoppingProduct2 = {
  /** Product name */
  title?: string;
  /**
   * 1-indexed rank across all products in all shopping cards in the response (flat, not reset per
   * card).
   */
  position?: number;
  /** Product page URL */
  url?: string;
  /** Product description */
  description?: string;
  /** gpt-6 product card with no listing: the line under the card title */
  subtitle?: string;
  /** gpt-6 product card: the "Label: value" lines of the card, such as "Best for: ..." */
  attributes?: Attribute1[];
  /**
   * gpt-6 product card: the `citationPillId` of each citation chip in the card. The pills are in
   * `result.citationPills`; look them up by `citationPillId`. Omitted when the card has no
   * citation.
   */
  citationPillIds?: number[];
  /** Current price */
  price?: string;
  /** Product category or style tag */
  featuredTag?: string;
  /** Product rating (0-5) */
  rating?: number;
  /** Number of reviews */
  numReviews?: number;
  /** Product image URLs */
  imageUrls?: string[];
  /** Product identifier */
  id?: string;
  /** Product variants (size, color, etc.) */
  variants?: Record<string, unknown>;
  /** Shopping offers with pricing details from different merchants */
  offers?: ShoppingOffer[];
  /** Rating source information with supporting websites */
  ratingGroupedCitation?: RatingGroupedCitation;
  /** Data provider identifier */
  provider?: string;
  /** List of data providers */
  providers?: string[];
  /** Key used to look up product updates */
  productLookupKey?: ProductLookupKey;
  /** Structured product lookup query data */
  productLookupData?: ProductLookupData;
  /**
   * Visual showcase metadata attached to a shopping product (image, background, and per-slot
   * placement).
   */
  showcaseMetadata?: ShowcaseMetadata;
  /** Whether to show price disclosure */
  showPriceDisclosure?: boolean;
  /** Analytics metadata */
  analyticsMeta?: AnalyticsMeta;
  /** Sources of product metadata */
  metadataSources?: string[];
  /** UUID for product event tracking */
  productEventUuid?: string;
  /**
   * Broad shopping query ChatGPT generated for this product (extracted from
   * product_lookup_key.data). Useful for understanding the search intent behind the recommendation.
   */
  generatedProductQuery?: string;
  /** Rationale and reviews from the product sheet */
  productDetails?: ProductDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shoppingProduct2Schema: Schema<ShoppingProduct2> = s.object<ShoppingProduct2>(
  {
    title: s.optional(s.string()),
    position: s.optional(s.int()),
    url: s.optional(s.string()),
    description: s.optional(s.string()),
    subtitle: s.optional(s.string()),
    attributes: s.optional(s.array(s.lazy(() => attribute1Schema))),
    citationPillIds: s.optional(s.array(s.int())),
    price: s.optional(s.string()),
    featuredTag: s.optional(s.string()),
    rating: s.optional(s.float64()),
    numReviews: s.optional(s.int()),
    imageUrls: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    variants: s.optional(s.record(s.string(), s.unknown())),
    offers: s.optional(s.array(s.lazy(() => shoppingOfferSchema))),
    ratingGroupedCitation: s.optional(s.lazy(() => ratingGroupedCitationSchema)),
    provider: s.optional(s.string()),
    providers: s.optional(s.array(s.string())),
    productLookupKey: s.optional(s.lazy(() => productLookupKeySchema)),
    productLookupData: s.optional(s.lazy(() => productLookupDataSchema)),
    showcaseMetadata: s.optional(s.lazy(() => showcaseMetadataSchema)),
    showPriceDisclosure: s.optional(s.boolean()),
    analyticsMeta: s.optional(s.lazy(() => analyticsMetaSchema)),
    metadataSources: s.optional(s.array(s.string())),
    productEventUuid: s.optional(s.string()),
    generatedProductQuery: s.optional(s.string()),
    productDetails: s.optional(s.lazy(() => productDetailsSchema)),
    _keysMap: {
      featuredTag: "featured_tag",
      numReviews: "num_reviews",
      imageUrls: "image_urls",
      ratingGroupedCitation: "rating_grouped_citation",
      productLookupKey: "product_lookup_key",
      productLookupData: "product_lookup_data",
      showcaseMetadata: "showcase_metadata",
      showPriceDisclosure: "show_price_disclosure",
      analyticsMeta: "analytics_meta",
      metadataSources: "metadata_sources",
      productEventUuid: "product_event_uuid",
    },
  },
  { additionalProperties: s.json() },
);
