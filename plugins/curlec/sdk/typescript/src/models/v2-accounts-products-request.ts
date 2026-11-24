import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V2AccountsProductsRequest = {
  /** @default "route" */
  productName?: "route";
  /** Set to true to accept Razorpay TnC on behalf of the sub-merchant. */
  tncAccepted?: boolean;
  applicableIdentified?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2AccountsProductsRequestSchema: Schema<V2AccountsProductsRequest> =
  s.object<V2AccountsProductsRequest>(
    {
      productName: s.defaulted(s.literal("route"), "route"),
      tncAccepted: s.optional(s.boolean()),
      applicableIdentified: s.optional(s.boolean()),
      _keysMap: {
        productName: "product_name",
        tncAccepted: "tnc_accepted",
        applicableIdentified: "applicable_identified",
      },
    },
    { additionalProperties: s.json() },
  );
