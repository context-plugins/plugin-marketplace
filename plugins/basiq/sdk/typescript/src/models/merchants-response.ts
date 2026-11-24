import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { links2Schema, type Links2 } from "./links2.js";
import { merchantDetailsSchema, type MerchantDetails } from "./merchant-details.js";

export type MerchantsResponse = {
  /** Always 'list'. */
  type: string;
  /** The number of merchants returned. */
  size: number;
  /** Array of merchant objects. */
  data: MerchantDetails[];
  links: Links2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const merchantsResponseSchema: Schema<MerchantsResponse> = s.object<MerchantsResponse>(
  {
    type: s.string(),
    size: s.int(),
    data: s.array(s.lazy(() => merchantDetailsSchema)),
    links: links2Schema,
  },
  { additionalProperties: s.json() },
);
