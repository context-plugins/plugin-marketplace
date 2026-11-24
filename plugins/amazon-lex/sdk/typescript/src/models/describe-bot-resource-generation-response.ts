import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { generationStatusSchema, type GenerationStatus } from "./generation-status.js";

export type DescribeBotResourceGenerationResponse = {
  /** The unique identifier of the bot for which the generation request was made. */
  botId?: string;
  /** The version of the bot for which the generation request was made. */
  botVersion?: string;
  /** The locale of the bot for which the generation request was made. */
  localeId?: string;
  /** The generation ID for which to return the generation details. */
  generationId?: string;
  /**
   * A list of reasons why the generation of bot resources through natural language description
   * failed.
   */
  failureReasons?: string[];
  /** The status of the generation request. */
  generationStatus?: GenerationStatus;
  /** The prompt used in the generation request. */
  generationInputPrompt?: string;
  /** The Amazon S3 location of the generated bot locale configuration. */
  generatedBotLocaleUrl?: string;
  /** The date and time at which the item was generated. */
  creationDateTime?: Date;
  /** The ARN of the model used to generate the bot resources. */
  modelArn?: string;
  /** The date and time at which the generated item was updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotResourceGenerationResponseSchema: Schema<DescribeBotResourceGenerationResponse> =
  s.object<DescribeBotResourceGenerationResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      generationId: s.optional(s.string()),
      failureReasons: s.optional(s.array(s.string())),
      generationStatus: s.optional(s.lazy(() => generationStatusSchema)),
      generationInputPrompt: s.optional(s.string()),
      generatedBotLocaleUrl: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      modelArn: s.optional(s.string()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
