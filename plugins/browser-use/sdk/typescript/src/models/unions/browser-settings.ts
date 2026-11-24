import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  runBrowserSettingsInternalSchema,
  runBrowserSettingsSchema,
  type RunBrowserSettings,
} from "../run-browser-settings.js";

export type BrowserSettings = RunBrowserSettings;

export const browserSettingsInternalSchema: Schema<BrowserSettings> = s.of<BrowserSettings>(
  s.union([s.lazy(() => runBrowserSettingsInternalSchema)]),
);

export const browserSettingsSchema: Schema<BrowserSettings> = s.lazySchema(() =>
  s.of<BrowserSettings>(s.union([s.lazy(() => runBrowserSettingsSchema)])),
);
