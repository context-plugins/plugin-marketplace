import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialAutomationApiInternalSchema,
  itemBundleSocialAutomationApiSchema,
  type ItemBundleSocialAutomationApi,
} from "./item-bundle-social-automation-api.js";

export type ApiV1AutomationsResponse = {
  items: ItemBundleSocialAutomationApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationsResponseProperties: s.Shape<ApiV1AutomationsResponse> = {
  items: s.array(s.lazy(() => itemBundleSocialAutomationApiInternalSchema)),
  total: s.float64(),
};

export const apiV1AutomationsResponseInternalSchema: Schema<ApiV1AutomationsResponse> =
  s.object<ApiV1AutomationsResponse>(apiV1AutomationsResponseProperties, { additionalProperties: s.json() });

export const apiV1AutomationsResponseSchema: Schema<ApiV1AutomationsResponse> = s.lazySchema(() =>
  s.object<ApiV1AutomationsResponse>(
    {
      ...apiV1AutomationsResponseProperties,
      items: s.array(s.lazy(() => itemBundleSocialAutomationApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
