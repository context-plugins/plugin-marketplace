import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Discord = {
  channelId: string;
  text?: string | null;
  uploadIds?: string[] | null;
  /** The username to display as the author of the message. */
  username?: string | null;
  /** Avatar url to display as the author of the message. */
  avatarUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discordSchema: Schema<Discord> = s.object<Discord>(
  {
    channelId: s.string(),
    text: s.optionalNullable(s.string()),
    uploadIds: s.optionalNullable(s.array(s.string())),
    username: s.optionalNullable(s.string()),
    avatarUrl: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
