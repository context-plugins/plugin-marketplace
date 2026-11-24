import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { iconUrlSchema, type IconUrl } from "./unions/icon-url.js";

/** Response for a single integration. */
export type IntegrationResponse = {
  provider: string;
  displayName: string;
  description: string;
  iconUrl: IconUrl;
  category: string;
  isConnected: boolean;
  authType: string;
  /** @default false */
  isPopular?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const integrationResponseSchema: Schema<IntegrationResponse> = s.object<IntegrationResponse>(
  {
    provider: s.string(),
    displayName: s.string(),
    description: s.string(),
    iconUrl: iconUrlSchema,
    category: s.string(),
    isConnected: s.boolean(),
    authType: s.string(),
    isPopular: s.defaulted(s.boolean(), false),
    _keysMap: {
      displayName: "display_name",
      iconUrl: "icon_url",
      isConnected: "is_connected",
      authType: "auth_type",
      isPopular: "is_popular",
    },
  },
  { additionalProperties: s.json() },
);
