import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialAutomationApiInternalSchema,
  itemBundleSocialAutomationApiSchema,
  type ItemBundleSocialAutomationApi,
} from "./item-bundle-social-automation-api.js";

export type ApiV1AutomationsCopyResponse = {
  items: ItemBundleSocialAutomationApi[];
  total: number;
  /** Source flows not copied because the target organization has no access to their platform. */
  skipped: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationsCopyResponseProperties: s.Shape<ApiV1AutomationsCopyResponse> = {
  items: s.array(s.lazy(() => itemBundleSocialAutomationApiInternalSchema)),
  total: s.float64(),
  skipped: s.int(),
};

export const apiV1AutomationsCopyResponseInternalSchema: Schema<ApiV1AutomationsCopyResponse> =
  s.object<ApiV1AutomationsCopyResponse>(apiV1AutomationsCopyResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AutomationsCopyResponseSchema: Schema<ApiV1AutomationsCopyResponse> = s.lazySchema(() =>
  s.object<ApiV1AutomationsCopyResponse>(
    {
      ...apiV1AutomationsCopyResponseProperties,
      items: s.array(s.lazy(() => itemBundleSocialAutomationApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
