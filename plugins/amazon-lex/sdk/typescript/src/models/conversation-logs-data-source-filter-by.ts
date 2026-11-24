import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  inputModeAmazonLexModelBuildingV2TestsetgenerationsApiSchema,
  type InputModeAmazonLexModelBuildingV2TestsetgenerationsApi,
} from "./input-mode-amazon-lex-model-building-v2-testsetgenerations-api.js";

export type ConversationLogsDataSourceFilterBy = {
  /** The start time for the conversation log. */
  startTime: Date;
  /** The end time for the conversation log. */
  endTime: Date;
  /** The selection to filter by input mode for the conversation logs. */
  inputMode: InputModeAmazonLexModelBuildingV2TestsetgenerationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLogsDataSourceFilterBySchema: Schema<ConversationLogsDataSourceFilterBy> =
  s.object<ConversationLogsDataSourceFilterBy>(
    {
      startTime: s.dateTime(),
      endTime: s.dateTime(),
      inputMode: inputModeAmazonLexModelBuildingV2TestsetgenerationsApiSchema,
    },
    { additionalProperties: s.json() },
  );
