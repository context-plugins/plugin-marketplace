import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  maxSubscriptionsReachedErrorSchema,
  type MaxSubscriptionsReachedError,
} from "../max-subscriptions-reached-error.js";

export type CustomersExchangesResponse1 = MaxSubscriptionsReachedError;

export const customersExchangesResponse1Schema: Schema<CustomersExchangesResponse1> =
  s.of<CustomersExchangesResponse1>(s.union([s.lazy(() => maxSubscriptionsReachedErrorSchema)]));
