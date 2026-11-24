import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  appHttpResourcesApiAddressResourceSchema,
  type AppHttpResourcesApiAddressResource,
} from "../app-http-resources-api-address-resource.js";

export type PrimaryAddress = AppHttpResourcesApiAddressResource;

export const primaryAddressSchema: Schema<PrimaryAddress> = s.of<PrimaryAddress>(
  s.union([s.lazy(() => appHttpResourcesApiAddressResourceSchema)]),
);
