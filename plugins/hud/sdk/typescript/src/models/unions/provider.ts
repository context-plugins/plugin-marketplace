import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { providerResponseSchema, type ProviderResponse } from "../provider-response.js";

export type Provider = ProviderResponse;

export const providerSchema: Schema<Provider> = s.of<Provider>(
  s.union([s.lazy(() => providerResponseSchema)]),
);
