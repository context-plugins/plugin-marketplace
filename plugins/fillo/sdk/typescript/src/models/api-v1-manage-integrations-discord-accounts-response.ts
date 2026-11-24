import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageIntegrationsDiscordAccountsResponse = {
  id: string;
  label: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageIntegrationsDiscordAccountsResponseSchema: Schema<ApiV1ManageIntegrationsDiscordAccountsResponse> =
  s.object<ApiV1ManageIntegrationsDiscordAccountsResponse>(
    {
      id: s.string(),
      label: s.string(),
    },
    { additionalProperties: s.json() },
  );
