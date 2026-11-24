import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LoginRequest2 = {
  /** Your API key name */
  username: string;
  /** Your API key secret */
  apiKey: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loginRequest2Schema: Schema<LoginRequest2> = s.object<LoginRequest2>(
  {
    username: s.string(),
    apiKey: s.string(),
    _keysMap: {
      apiKey: "api-key",
    },
  },
  { additionalProperties: s.json() },
);
