import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioLogSettingSchema, type AudioLogSetting } from "./audio-log-setting.js";
import { textLogSettingSchema, type TextLogSetting } from "./text-log-setting.js";

export type ConversationLogSettings = {
  /** The Amazon CloudWatch Logs settings for logging text and metadata. */
  textLogSettings?: TextLogSetting[];
  /** The Amazon S3 settings for logging audio to an S3 bucket. */
  audioLogSettings?: AudioLogSetting[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLogSettingsSchema: Schema<ConversationLogSettings> =
  s.object<ConversationLogSettings>(
    {
      textLogSettings: s.optional(s.array(s.lazy(() => textLogSettingSchema))),
      audioLogSettings: s.optional(s.array(s.lazy(() => audioLogSettingSchema))),
    },
    { additionalProperties: s.json() },
  );
