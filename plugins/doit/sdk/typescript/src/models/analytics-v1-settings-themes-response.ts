import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customThemeInternalSchema, customThemeSchema, type CustomTheme } from "./custom-theme.js";

export type AnalyticsV1SettingsThemesResponse = {
  /** Total number of custom themes in the result set. */
  rowCount?: number;
  themes?: CustomTheme[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const analyticsV1SettingsThemesResponseProperties: s.Shape<AnalyticsV1SettingsThemesResponse> = {
  rowCount: s.optional(s.int()),
  themes: s.optional(s.array(s.lazy(() => customThemeInternalSchema))),
};

export const analyticsV1SettingsThemesResponseInternalSchema: Schema<AnalyticsV1SettingsThemesResponse> =
  s.object<AnalyticsV1SettingsThemesResponse>(analyticsV1SettingsThemesResponseProperties, {
    additionalProperties: s.json(),
  });

export const analyticsV1SettingsThemesResponseSchema: Schema<AnalyticsV1SettingsThemesResponse> =
  s.lazySchema(() =>
    s.object<AnalyticsV1SettingsThemesResponse>(
      {
        ...analyticsV1SettingsThemesResponseProperties,
        themes: s.optional(s.array(s.lazy(() => customThemeSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
