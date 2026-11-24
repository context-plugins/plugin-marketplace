import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Response = {
  currentUserUrl?: string;
  accountsUrl?: string;
  apiVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSchema: Schema<Response> = s.object<Response>(
  {
    currentUserUrl: s.optional(s.string()),
    accountsUrl: s.optional(s.string()),
    apiVersion: s.optional(s.string()),
    _keysMap: {
      currentUserUrl: "current_user_url",
      accountsUrl: "accounts_url",
      apiVersion: "api_version",
    },
  },
  { additionalProperties: s.json() },
);
