import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LoginRequest = {
  /** The username of the users credentials to login */
  username: string;
  /** The API key of the users credentials to login */
  apiKey: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loginRequestSchema: Schema<LoginRequest> = s.object<LoginRequest>(
  {
    username: s.string(),
    apiKey: s.string(),
    _keysMap: {
      apiKey: "api-key",
    },
  },
  { additionalProperties: s.json() },
);
