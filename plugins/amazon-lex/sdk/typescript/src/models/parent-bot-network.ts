import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ParentBotNetwork = {
  /** The identifier of the network of bots assigned by Amazon Lex. */
  botId: string;
  /** The version of the network of bots. */
  botVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const parentBotNetworkSchema: Schema<ParentBotNetwork> = s.object<ParentBotNetwork>(
  {
    botId: s.string(),
    botVersion: s.string(),
  },
  { additionalProperties: s.json() },
);
