import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webSearchProviderItemSchema, type WebSearchProviderItem } from "./web-search-provider-item.js";
import { webSearchSettingsSchema, type WebSearchSettings } from "./web-search-settings.js";

/** Response for getWebSearchProviders */
export type WebSearchProvidersResponse = {
  /** @default "success" */
  status?: "success";
  providers: WebSearchProviderItem[];
  /** Normalized web search global settings returned by getWebSearchProviders */
  settings: WebSearchSettings;
  /** Human-readable status (empty list vs populated providers) */
  message: string;
};

export const webSearchProvidersResponseSchema: Schema<WebSearchProvidersResponse> =
  s.object<WebSearchProvidersResponse>({
    status: s.defaulted(s.literal("success"), "success"),
    providers: s.array(s.lazy(() => webSearchProviderItemSchema)),
    settings: webSearchSettingsSchema,
    message: s.string(),
  });
