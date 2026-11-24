import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { discordServerSchema, type DiscordServer } from "./discord-server.js";
import { selectedSchema, type Selected } from "./selected.js";

export type ApiV1ManageIntegrationsConnectionsResponse = {
  accounts: Account[];
  /** The account id this project uses for each provider, or null. */
  selected: Selected;
  discordServers: DiscordServer[];
  /** Form destinations pinned to the detached account that were removed from this project. */
  removedDestinations: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageIntegrationsConnectionsResponseSchema: Schema<ApiV1ManageIntegrationsConnectionsResponse> =
  s.object<ApiV1ManageIntegrationsConnectionsResponse>(
    {
      accounts: s.array(s.lazy(() => accountSchema)),
      selected: selectedSchema,
      discordServers: s.array(s.lazy(() => discordServerSchema)),
      removedDestinations: s.int(),
    },
    { additionalProperties: s.json() },
  );
