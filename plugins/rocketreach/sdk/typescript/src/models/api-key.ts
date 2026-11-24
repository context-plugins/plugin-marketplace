import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiKey = {
  /**
   * The API key for your account. You can also find your API key
   * [here](https://rocketreach.co/account?section=nav_gen_api).
   */
  apiKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeySchema: Schema<ApiKey> = s.object<ApiKey>(
  {
    apiKey: s.optional(s.string()),
    _keysMap: {
      apiKey: "api_key",
    },
  },
  { additionalProperties: s.json() },
);
