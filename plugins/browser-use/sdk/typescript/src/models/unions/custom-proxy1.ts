import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  customProxyModelInternalSchema,
  customProxyModelSchema,
  type CustomProxyModel,
} from "../custom-proxy-model.js";

/**
 * Custom proxy for the browser. Overrides proxyCountryCode. Never stored or inherited by follow-up
 * runs; pass it on each run that should use it.
 */
export type CustomProxy1 = CustomProxyModel;

export const customProxy1InternalSchema: Schema<CustomProxy1> = s.of<CustomProxy1>(
  s.union([s.lazy(() => customProxyModelInternalSchema)]),
);

export const customProxy1Schema: Schema<CustomProxy1> = s.lazySchema(() =>
  s.of<CustomProxy1>(s.union([s.lazy(() => customProxyModelSchema)])),
);
