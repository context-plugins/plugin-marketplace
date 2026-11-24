import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";
import { subtypeSchema, type Subtype } from "./subtype.js";

export type StoreCampaignItemTicketRequest = {
  name: string;
  price: number;
  totalQuantity?: number | null;
  subtype?: Subtype | null;
  active?: boolean | null;
  retailPrice?: number | null;
  description?: string | null;
  bundleOnly?: boolean | null;
  hideRemaining?: boolean | null;
  scope?: Scope | null;
  bundles?: string[] | null;
  customFields?: string[] | null;
  pictures?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storeCampaignItemTicketRequestProperties: s.Shape<StoreCampaignItemTicketRequest> = {
  name: s.string(),
  price: s.float64(),
  totalQuantity: s.optionalNullable(s.int()),
  subtype: s.optionalNullable(s.lazy(() => subtypeSchema)),
  active: s.optionalNullable(s.boolean()),
  retailPrice: s.optionalNullable(s.float64()),
  description: s.optionalNullable(s.string()),
  bundleOnly: s.optionalNullable(s.boolean()),
  hideRemaining: s.optionalNullable(s.boolean()),
  scope: s.optionalNullable(s.lazy(() => scopeSchema)),
  bundles: s.optionalNullable(s.array(s.string())),
  customFields: s.optionalNullable(s.array(s.string())),
  pictures: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    totalQuantity: "total_quantity",
    retailPrice: "retail_price",
    bundleOnly: "bundle_only",
    hideRemaining: "hide_remaining",
    customFields: "custom_fields",
  },
};

export const storeCampaignItemTicketRequestInternalSchema: Schema<StoreCampaignItemTicketRequest> =
  s.object<StoreCampaignItemTicketRequest>(storeCampaignItemTicketRequestProperties, {
    additionalProperties: s.json(),
  });

export const storeCampaignItemTicketRequestSchema: Schema<StoreCampaignItemTicketRequest> = s.lazySchema(() =>
  s.object<StoreCampaignItemTicketRequest>(
    {
      ...storeCampaignItemTicketRequestProperties,
      name: s.string().check(s.maxLength(255)),
      price: s.float64().check(s.gte(0)),
      totalQuantity: s.optionalNullable(s.int().check(s.gte(0))),
      retailPrice: s.optionalNullable(s.float64().check(s.gte(0))),
      description: s.optionalNullable(s.string().check(s.maxLength(5000))),
    },
    { additionalProperties: s.json() },
  ),
);
