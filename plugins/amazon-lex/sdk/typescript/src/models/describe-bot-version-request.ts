import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBotVersionRequest = {
  /** The identifier of the bot containing the version to return metadata for. */
  botId: string;
  /** The version of the bot to return metadata for. */
  botVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotVersionRequestSchema: Schema<DescribeBotVersionRequest> =
  s.object<DescribeBotVersionRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
    },
    { additionalProperties: s.json() },
  );
