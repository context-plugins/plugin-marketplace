import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ExtractBuildingUnits, extractBuildingUnitsSchema } from "./extract-building-units.js";
import { PropertyStatus, propertyStatusSchema } from "./property-status.js";

/**
 * Up to 500 entries total across urls and addresses. At least one of urls or addresses is required.
 */
export type BatchPropertyRequest = {
  /** Zillow URLs to resolve. */
  urls?: string[];
  /** Full street addresses to resolve. */
  addresses?: string[];
  /** @default PropertyStatus.ForSale */
  propertyStatus?: PropertyStatus;
  /** @default ExtractBuildingUnits.Disabled */
  extractBuildingUnits?: ExtractBuildingUnits;
  /** Upper bound on records returned by the job. */
  maxItems?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const batchPropertyRequestProperties: s.Shape<BatchPropertyRequest> = {
  urls: s.optional(s.array(s.string())),
  addresses: s.optional(s.array(s.string())),
  propertyStatus: s.defaulted(propertyStatusSchema, PropertyStatus.ForSale),
  extractBuildingUnits: s.defaulted(extractBuildingUnitsSchema, ExtractBuildingUnits.Disabled),
  maxItems: s.optional(s.int()),
};

export const batchPropertyRequestInternalSchema: Schema<BatchPropertyRequest> =
  s.object<BatchPropertyRequest>(batchPropertyRequestProperties, { additionalProperties: s.json() });

export const batchPropertyRequestSchema: Schema<BatchPropertyRequest> = s.lazySchema(() =>
  s.object<BatchPropertyRequest>(
    {
      ...batchPropertyRequestProperties,
      urls: s.optional(s.array(s.string().check(s.url())).check(s.maxLength(500))),
      addresses: s.optional(s.array(s.string()).check(s.maxLength(500))),
      maxItems: s.optional(s.int().check(s.gte(1), s.lte(5000))),
    },
    { additionalProperties: s.json() },
  ),
);
