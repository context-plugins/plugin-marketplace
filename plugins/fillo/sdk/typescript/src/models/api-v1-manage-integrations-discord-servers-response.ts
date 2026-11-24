import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageIntegrationsDiscordServersResponse = {
  /** @default "True" */
  disconnected?: "True";
  guildId: string;
  name: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageIntegrationsDiscordServersResponseSchema: Schema<ApiV1ManageIntegrationsDiscordServersResponse> =
  s.object<ApiV1ManageIntegrationsDiscordServersResponse>(
    {
      disconnected: s.defaulted(s.literal("True"), "True"),
      guildId: s.string(),
      name: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
