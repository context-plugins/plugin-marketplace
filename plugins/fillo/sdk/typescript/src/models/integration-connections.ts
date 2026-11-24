import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { discordServerSchema, type DiscordServer } from "./discord-server.js";
import { selectedSchema, type Selected } from "./selected.js";

export type IntegrationConnections = {
  accounts: Account[];
  /** The account id this project uses for each provider, or null. */
  selected: Selected;
  discordServers: DiscordServer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const integrationConnectionsSchema: Schema<IntegrationConnections> = s.object<IntegrationConnections>(
  {
    accounts: s.array(s.lazy(() => accountSchema)),
    selected: selectedSchema,
    discordServers: s.array(s.lazy(() => discordServerSchema)),
  },
  { additionalProperties: s.json() },
);
