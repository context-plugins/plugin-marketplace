import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BotVersionLocaleDetails = {
  /** The version of a bot used for a bot locale. */
  sourceBotVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botVersionLocaleDetailsSchema: Schema<BotVersionLocaleDetails> =
  s.object<BotVersionLocaleDetails>(
    {
      sourceBotVersion: s.string(),
    },
    { additionalProperties: s.json() },
  );
