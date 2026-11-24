import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentsSchema, type Contents } from "./contents.js";
import {
  EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi,
  ebaySiteCompSniperMarketplaceAndShippingShippingRatesApiSchema,
} from "./ebay-site-comp-sniper-marketplace-and-shipping-shipping-rates-api.js";
import { packageInternalSchema, packageSchema, type Package } from "./package.js";
import { shipFromInternalSchema, shipFromSchema, type ShipFrom } from "./ship-from.js";
import { shipToInternalSchema, shipToSchema, type ShipTo } from "./ship-to.js";

export type ShippingRateRequest = {
  /** @default EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi.EbayCom */
  ebaySite?: EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi;
  shipFrom: ShipFrom;
  shipTo: ShipTo;
  package: Package;
  contents?: Contents;
};

const shippingRateRequestProperties: s.Shape<ShippingRateRequest> = {
  ebaySite: s.defaulted(
    ebaySiteCompSniperMarketplaceAndShippingShippingRatesApiSchema,
    EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi.EbayCom,
  ),
  shipFrom: shipFromInternalSchema,
  shipTo: shipToInternalSchema,
  package: packageInternalSchema,
  contents: s.optional(s.lazy(() => contentsSchema)),
};

export const shippingRateRequestInternalSchema: Schema<ShippingRateRequest> = s.object<ShippingRateRequest>(
  shippingRateRequestProperties,
);

export const shippingRateRequestSchema: Schema<ShippingRateRequest> = s.lazySchema(() =>
  s.object<ShippingRateRequest>({
    ...shippingRateRequestProperties,
    shipFrom: shipFromSchema,
    shipTo: shipToSchema,
    package: packageSchema,
  }),
);
