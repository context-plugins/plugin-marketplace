import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botVersionLocaleDetailsSchema, type BotVersionLocaleDetails } from "./bot-version-locale-details.js";

export type CreateBotVersionRequest = {
  /** The identifier of the bot to create the version for. */
  botId: string;
  /** A description of the version. Use the description to help identify the version in lists. */
  description?: string;
  /**
   * Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or
   * any other previously published version for each locale. When you specify a source version, the
   * locale data is copied from the source version to the new version.
   */
  botVersionLocaleSpecification: Record<string, BotVersionLocaleDetails>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotVersionRequestSchema: Schema<CreateBotVersionRequest> =
  s.object<CreateBotVersionRequest>(
    {
      botId: s.string(),
      description: s.optional(s.string()),
      botVersionLocaleSpecification: s.record(
        s.string(),
        s.lazy(() => botVersionLocaleDetailsSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
