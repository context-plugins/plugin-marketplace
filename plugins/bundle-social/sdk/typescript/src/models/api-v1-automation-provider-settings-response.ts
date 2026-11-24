import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item3BundleSocialAutomationApiInternalSchema,
  item3BundleSocialAutomationApiSchema,
  type Item3BundleSocialAutomationApi,
} from "./item3-bundle-social-automation-api.js";

export type ApiV1AutomationProviderSettingsResponse = {
  items: Item3BundleSocialAutomationApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationProviderSettingsResponseProperties: s.Shape<ApiV1AutomationProviderSettingsResponse> = {
  items: s.array(s.lazy(() => item3BundleSocialAutomationApiInternalSchema)),
  total: s.float64(),
};

export const apiV1AutomationProviderSettingsResponseInternalSchema: Schema<ApiV1AutomationProviderSettingsResponse> =
  s.object<ApiV1AutomationProviderSettingsResponse>(apiV1AutomationProviderSettingsResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AutomationProviderSettingsResponseSchema: Schema<ApiV1AutomationProviderSettingsResponse> =
  s.lazySchema(() =>
    s.object<ApiV1AutomationProviderSettingsResponse>(
      {
        ...apiV1AutomationProviderSettingsResponseProperties,
        items: s.array(s.lazy(() => item3BundleSocialAutomationApiSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
