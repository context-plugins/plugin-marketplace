import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBotLocaleRequest = {
  /** The identifier of the bot associated with the locale. */
  botId: string;
  /** The version of the bot associated with the locale. */
  botVersion: string;
  /**
   * The unique identifier of the locale to describe. The string must match one of the supported
   * locales. For more information, see Supported languages.
   */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotLocaleRequestSchema: Schema<DescribeBotLocaleRequest> =
  s.object<DescribeBotLocaleRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
