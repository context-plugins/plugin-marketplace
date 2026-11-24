import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListBotReplicasRequest = {
  /** The request for the unique bot IDs in the list of replicated bots. */
  botId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotReplicasRequestSchema: Schema<ListBotReplicasRequest> = s.object<ListBotReplicasRequest>(
  {
    botId: s.string(),
  },
  { additionalProperties: s.json() },
);
