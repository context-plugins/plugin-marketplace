import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  landingPageConfigurationInternalSchema,
  landingPageConfigurationSchema,
  type LandingPageConfiguration,
} from "./landing-page-configuration.js";
import { lineItemInternalSchema, lineItemSchema, type LineItem } from "./line-item.js";

export type ShoppingListRequest = {
  /** The title displayed at the top of the shopping list page. */
  title: string;
  /** URL of an image to display on the shopping list page. */
  imageUrl?: string;
  /** The type of product link to create. */
  linkType?: string;
  /** The number of seconds until the generated link expires. */
  expiresIn?: number;
  /** Additional instructions or notes to display on the page. */
  instructions?: string;
  /** The list of products to include on the shopping list page. */
  lineItems: LineItem[];
  /** Configuration options for the landing page appearance and behavior. */
  landingPageConfiguration?: LandingPageConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shoppingListRequestProperties: s.Shape<ShoppingListRequest> = {
  title: s.string(),
  imageUrl: s.optional(s.string()),
  linkType: s.optional(s.string()),
  expiresIn: s.optional(s.int()),
  instructions: s.optional(s.string()),
  lineItems: s.array(s.lazy(() => lineItemInternalSchema)),
  landingPageConfiguration: s.optional(s.lazy(() => landingPageConfigurationInternalSchema)),
  _keysMap: {
    imageUrl: "image_url",
    linkType: "link_type",
    expiresIn: "expires_in",
    lineItems: "line_items",
    landingPageConfiguration: "landing_page_configuration",
  },
};

export const shoppingListRequestInternalSchema: Schema<ShoppingListRequest> = s.object<ShoppingListRequest>(
  shoppingListRequestProperties,
  { additionalProperties: s.json() },
);

export const shoppingListRequestSchema: Schema<ShoppingListRequest> = s.lazySchema(() =>
  s.object<ShoppingListRequest>(
    {
      ...shoppingListRequestProperties,
      imageUrl: s.optional(s.string().check(s.url())),
      expiresIn: s.optional(s.int().check(s.gte(1))),
      lineItems: s.array(s.lazy(() => lineItemSchema)),
      landingPageConfiguration: s.optional(s.lazy(() => landingPageConfigurationSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
