import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DevCountryAggregate = {
  /**
   * Country of the developer's registered address as disclosed on the store listing (ISO 3166-1
   * alpha-2). May differ from where the company actually operates.
   */
  hqCountry: string;
  /** Number of developers with this HQ country */
  developers: number;
  /** Sum of published apps across those developers */
  publishedApps: number;
  /** Sum of monthly downloads estimates across those developers */
  downloads: number;
  /** Sum of monthly revenue estimates across those developers, USD */
  revenue: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const devCountryAggregateSchema: Schema<DevCountryAggregate> = s.object<DevCountryAggregate>(
  {
    hqCountry: s.string(),
    developers: s.int(),
    publishedApps: s.int(),
    downloads: s.int(),
    revenue: s.int(),
    _keysMap: {
      hqCountry: "hq_country",
      publishedApps: "published_apps",
    },
  },
  { additionalProperties: s.json() },
);
