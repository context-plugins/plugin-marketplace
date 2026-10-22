import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  maximumNumberOfResourcesSchemaSchema,
  type MaximumNumberOfResourcesSchema,
} from "../maximum-number-of-resources-schema.js";

export type CustomersExchangeSessionsResponse3 = MaximumNumberOfResourcesSchema;

export const customersExchangeSessionsResponse3Schema: Schema<CustomersExchangeSessionsResponse3> =
  s.of<CustomersExchangeSessionsResponse3>(s.union([s.lazy(() => maximumNumberOfResourcesSchemaSchema)]));
