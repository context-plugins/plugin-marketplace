import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetBotRequest = {
  /** The name of the bot. The name is case sensitive. */
  name: string;
  /** The version or alias of the bot. */
  versionOrAlias: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotRequestSchema: Schema<GetBotRequest> = s.object<GetBotRequest>(
  {
    name: s.string(),
    versionOrAlias: s.string(),
  },
  { additionalProperties: s.json() },
);
