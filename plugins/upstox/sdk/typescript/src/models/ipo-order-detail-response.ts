import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipoOrderDataSchema, type IpoOrderData } from "./ipo-order-data.js";
import { statusSchema, type Status } from "./status.js";

export type IpoOrderDetailResponse = {
  status?: Status;
  data?: IpoOrderData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoOrderDetailResponseSchema: Schema<IpoOrderDetailResponse> = s.object<IpoOrderDetailResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => ipoOrderDataSchema)),
  },
  { additionalProperties: s.json() },
);
