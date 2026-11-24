import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageIntegrationsDiscordAccountsRequest = {
  /** An empty string clears the name. */
  label: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageIntegrationsDiscordAccountsRequestSchema: Schema<ApiV1ManageIntegrationsDiscordAccountsRequest> =
  s.object<ApiV1ManageIntegrationsDiscordAccountsRequest>(
    {
      label: s.string(),
    },
    { additionalProperties: s.json() },
  );
