import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botStatus3Schema, type BotStatus3 } from "./bot-status3.js";
import { botVersionLocaleDetailsSchema, type BotVersionLocaleDetails } from "./bot-version-locale-details.js";

export type CreateBotVersionResponse = {
  /** The bot identifier specified in the request. */
  botId?: string;
  /** The description of the version specified in the request. */
  description?: string;
  /** The version number assigned to the version. */
  botVersion?: string;
  /** The source versions used for each locale in the new version. */
  botVersionLocaleSpecification?: Record<string, BotVersionLocaleDetails>;
  /**
   * When you send a request to create or update a bot, Amazon Lex sets the status response element
   * to Creating. After Amazon Lex builds the bot, it sets status to Available. If Amazon Lex can't
   * build the bot, it sets status to Failed.
   */
  botStatus?: BotStatus3;
  /** A timestamp of the date and time that the version was created. */
  creationDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotVersionResponseSchema: Schema<CreateBotVersionResponse> =
  s.object<CreateBotVersionResponse>(
    {
      botId: s.optional(s.string()),
      description: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      botVersionLocaleSpecification: s.optional(
        s.record(
          s.string(),
          s.lazy(() => botVersionLocaleDetailsSchema),
        ),
      ),
      botStatus: s.optional(s.lazy(() => botStatus3Schema)),
      creationDateTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
