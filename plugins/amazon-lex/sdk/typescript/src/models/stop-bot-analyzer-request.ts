import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopBotAnalyzerRequest = {
  /** The unique identifier of the bot. */
  botId: string;
  /** The unique identifier of the analysis request to stop. */
  botAnalyzerRequestId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopBotAnalyzerRequestSchema: Schema<StopBotAnalyzerRequest> = s.object<StopBotAnalyzerRequest>(
  {
    botId: s.string(),
    botAnalyzerRequestId: s.string(),
  },
  { additionalProperties: s.json() },
);
