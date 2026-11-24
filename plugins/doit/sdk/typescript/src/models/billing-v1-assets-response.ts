import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assetItemSchema, type AssetItem } from "./asset-item.js";

export type BillingV1AssetsResponse = {
  /** Array of Assets */
  assets?: AssetItem[];
  /** Page token. Can be used to request the next page of results. */
  pageToken?: string;
  /** Assets rows count */
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingV1AssetsResponseSchema: Schema<BillingV1AssetsResponse> =
  s.object<BillingV1AssetsResponse>(
    {
      assets: s.optional(s.array(s.lazy(() => assetItemSchema))),
      pageToken: s.optional(s.string()),
      rowCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
