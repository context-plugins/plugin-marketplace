import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SnsChannelConfig = {
  /** The Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. */
  topicArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const snsChannelConfigSchema: Schema<SnsChannelConfig> = s.object<SnsChannelConfig>(
  {
    topicArn: s.optional(s.string()),
    _keysMap: {
      topicArn: "TopicArn",
    },
  },
  { additionalProperties: s.json() },
);
