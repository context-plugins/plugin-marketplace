import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mutualFundMetaData1Schema, type MutualFundMetaData1 } from "./mutual-fund-meta-data1.js";
import { mutualFundOrderDataSchema, type MutualFundOrderData } from "./mutual-fund-order-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetMutualFundOrdersResponse = {
  status?: Status;
  /** Mutual fund orders in the requested window. */
  data?: MutualFundOrderData[];
  /** Meta data for mutual fund orders */
  metaData?: MutualFundMetaData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMutualFundOrdersResponseSchema: Schema<GetMutualFundOrdersResponse> =
  s.object<GetMutualFundOrdersResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.array(s.lazy(() => mutualFundOrderDataSchema))),
      metaData: s.optional(s.lazy(() => mutualFundMetaData1Schema)),
      _keysMap: {
        metaData: "meta_data",
      },
    },
    { additionalProperties: s.json() },
  );
