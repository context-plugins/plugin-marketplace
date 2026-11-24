import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiBaseSchema, type ApiBase } from "./unions/api-base.js";
import { iconUrlSchema, type IconUrl } from "./unions/icon-url.js";

export type ProviderResponse = {
  id: number;
  name: string;
  apiBase?: ApiBase;
  supportedRoutes?: string[];
  iconUrl?: IconUrl;
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const providerResponseSchema: Schema<ProviderResponse> = s.object<ProviderResponse>(
  {
    id: s.int(),
    name: s.string(),
    apiBase: s.optional(s.lazy(() => apiBaseSchema)),
    supportedRoutes: s.optional(s.array(s.string())),
    iconUrl: s.optional(s.lazy(() => iconUrlSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      apiBase: "api_base",
      supportedRoutes: "supported_routes",
      iconUrl: "icon_url",
    },
  },
  { additionalProperties: s.json() },
);
