import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";
import { Status61, status61Schema } from "./status61.js";
import { config2InternalSchema, config2Schema, type Config2 } from "./unions/config2.js";

export type ApiV1AutomationProviderSettingsRequest = {
  teamId: string;
  platform: Platform;
  config?: Config2;
  /** @default Status61.Draft */
  status?: Status61;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationProviderSettingsRequestProperties: s.Shape<ApiV1AutomationProviderSettingsRequest> = {
  teamId: s.string(),
  platform: platformSchema,
  config: s.optional(s.lazy(() => config2InternalSchema)),
  status: s.defaulted(status61Schema, Status61.Draft),
};

export const apiV1AutomationProviderSettingsRequestInternalSchema: Schema<ApiV1AutomationProviderSettingsRequest> =
  s.object<ApiV1AutomationProviderSettingsRequest>(apiV1AutomationProviderSettingsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AutomationProviderSettingsRequestSchema: Schema<ApiV1AutomationProviderSettingsRequest> =
  s.lazySchema(() =>
    s.object<ApiV1AutomationProviderSettingsRequest>(
      {
        ...apiV1AutomationProviderSettingsRequestProperties,
        config: s.optional(s.lazy(() => config2Schema)),
      },
      { additionalProperties: s.json() },
    ),
  );
