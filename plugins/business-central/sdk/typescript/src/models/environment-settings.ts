import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { updateWindowSchema, type UpdateWindow } from "./update-window.js";

export type EnvironmentSettings = {
  /** Application Insights instrumentation key */
  appInsightsKey?: string;
  updateWindow?: UpdateWindow;
  /** Security group assigned to the environment */
  securityGroupId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentSettingsSchema: Schema<EnvironmentSettings> = s.object<EnvironmentSettings>(
  {
    appInsightsKey: s.optional(s.string()),
    updateWindow: s.optional(s.lazy(() => updateWindowSchema)),
    securityGroupId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
