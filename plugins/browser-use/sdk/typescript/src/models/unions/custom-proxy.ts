import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  customProxyModelInternalSchema,
  customProxyModelSchema,
  type CustomProxyModel,
} from "../custom-proxy-model.js";

/** Custom proxy settings to use for the session. If not provided, our proxies will be used. */
export type CustomProxy = CustomProxyModel;

export const customProxyInternalSchema: Schema<CustomProxy> = s.of<CustomProxy>(
  s.union([s.lazy(() => customProxyModelInternalSchema)]),
);

export const customProxySchema: Schema<CustomProxy> = s.lazySchema(() =>
  s.of<CustomProxy>(s.union([s.lazy(() => customProxyModelSchema)])),
);
