import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipoMetaDataSchema, type IpoMetaData } from "./ipo-meta-data.js";
import { ipoOrderDataSchema, type IpoOrderData } from "./ipo-order-data.js";
import { statusSchema, type Status } from "./status.js";

export type IpoOrderResponse = {
  status?: Status;
  data?: IpoOrderData[];
  metaData?: IpoMetaData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoOrderResponseSchema: Schema<IpoOrderResponse> = s.object<IpoOrderResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => ipoOrderDataSchema))),
    metaData: s.optional(s.lazy(() => ipoMetaDataSchema)),
    _keysMap: {
      metaData: "meta_data",
    },
  },
  { additionalProperties: s.json() },
);
