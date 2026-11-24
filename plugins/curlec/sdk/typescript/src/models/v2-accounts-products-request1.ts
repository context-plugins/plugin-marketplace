import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { settlements1Schema, type Settlements1 } from "./settlements1.js";

export type V2AccountsProductsRequest1 = {
  settlements?: Settlements1;
  tncAccepted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2AccountsProductsRequest1Schema: Schema<V2AccountsProductsRequest1> =
  s.object<V2AccountsProductsRequest1>(
    {
      settlements: s.optional(s.lazy(() => settlements1Schema)),
      tncAccepted: s.optional(s.boolean()),
      _keysMap: {
        tncAccepted: "tnc_accepted",
      },
    },
    { additionalProperties: s.json() },
  );
