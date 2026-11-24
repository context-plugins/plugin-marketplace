import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { excerptSettingsSchema, type ExcerptSettings } from "./unions/excerpt-settings.js";
import { fetchPolicy1Schema, type FetchPolicy1 } from "./unions/fetch-policy1.js";
import { fullContent1Schema, type FullContent1 } from "./unions/full-content1.js";

/**
 * Advanced extract configuration.
 *
 * These settings may impact result quality and latency unless used carefully. See
 * https://docs.parallel.ai/search/advanced-extract-settings for more info.
 */
export type AdvancedExtractSettings = {
  /**
   * Fetch policy: determines when to return cached content from the index (faster) vs fetching live
   * content (fresher). Default is to use a dynamic policy based on the search objective and url.
   * Note: enabling live fetch significantly increases extract latency because it requires fetching
   * content from source websites.
   */
  fetchPolicy?: FetchPolicy1;
  /**
   * Controls excerpt sizes. Provide excerpt settings for fine-grained control, or omit to use
   * defaults.
   */
  excerptSettings?: ExcerptSettings;
  /**
   * Controls full content extraction. Set to true to enable with defaults, false to disable, or
   * provide FullContentSettings for fine-grained control.
   */
  fullContent?: FullContent1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const advancedExtractSettingsSchema: Schema<AdvancedExtractSettings> =
  s.object<AdvancedExtractSettings>(
    {
      fetchPolicy: s.optional(s.lazy(() => fetchPolicy1Schema)),
      excerptSettings: s.optional(s.lazy(() => excerptSettingsSchema)),
      fullContent: s.optional(s.lazy(() => fullContent1Schema)),
      _keysMap: {
        fetchPolicy: "fetch_policy",
        excerptSettings: "excerpt_settings",
        fullContent: "full_content",
      },
    },
    { additionalProperties: s.json() },
  );
