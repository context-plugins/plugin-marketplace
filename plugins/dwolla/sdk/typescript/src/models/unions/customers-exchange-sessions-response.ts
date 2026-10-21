import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  maximumNumberOfResourcesSchemaSchema,
  type MaximumNumberOfResourcesSchema,
} from "../maximum-number-of-resources-schema.js";

export type CustomersExchangeSessionsResponse = MaximumNumberOfResourcesSchema;

export const customersExchangeSessionsResponseSchema: Schema<CustomersExchangeSessionsResponse> =
  s.of<CustomersExchangeSessionsResponse>(s.union([s.lazy(() => maximumNumberOfResourcesSchemaSchema)]));
