import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBotRequest = {
  /** The unique identifier of the bot to describe. */
  botId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotRequestSchema: Schema<DescribeBotRequest> = s.object<DescribeBotRequest>(
  {
    botId: s.string(),
  },
  { additionalProperties: s.json() },
);
