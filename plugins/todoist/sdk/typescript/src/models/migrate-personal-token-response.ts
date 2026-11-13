import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MigratePersonalTokenResponse = {
  /** OAuth access token created from the personal token. */
  accessToken: string | null;
  /** OAuth token type. @default "Bearer" */
  tokenType?: "Bearer";
  /** Access token lifetime in seconds. */
  expiresIn: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const migratePersonalTokenResponseSchema: Schema<MigratePersonalTokenResponse> =
  s.object<MigratePersonalTokenResponse>(
    {
      accessToken: s.nullable(s.string()),
      tokenType: s.defaulted(s.literal("Bearer"), "Bearer"),
      expiresIn: s.int(),
      _keysMap: {
        accessToken: "access_token",
        tokenType: "token_type",
        expiresIn: "expires_in",
      },
    },
    { additionalProperties: s.json() },
  );
