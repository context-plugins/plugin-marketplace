import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item2BundleSocialAutomationApiInternalSchema,
  item2BundleSocialAutomationApiSchema,
  type Item2BundleSocialAutomationApi,
} from "./item2-bundle-social-automation-api.js";

export type ApiV1AutomationsExecutionsResponse = {
  items: Item2BundleSocialAutomationApi[];
  total?: number;
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationsExecutionsResponseProperties: s.Shape<ApiV1AutomationsExecutionsResponse> = {
  items: s.array(s.lazy(() => item2BundleSocialAutomationApiInternalSchema)),
  total: s.optional(s.float64()),
  nextCursor: s.optionalNullable(s.string()),
};

export const apiV1AutomationsExecutionsResponseInternalSchema: Schema<ApiV1AutomationsExecutionsResponse> =
  s.object<ApiV1AutomationsExecutionsResponse>(apiV1AutomationsExecutionsResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AutomationsExecutionsResponseSchema: Schema<ApiV1AutomationsExecutionsResponse> =
  s.lazySchema(() =>
    s.object<ApiV1AutomationsExecutionsResponse>(
      {
        ...apiV1AutomationsExecutionsResponseProperties,
        items: s.array(s.lazy(() => item2BundleSocialAutomationApiSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
