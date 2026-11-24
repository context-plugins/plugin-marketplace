import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActiveUsers = {
  anonymous?: number;
  loggedIn?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeUsersSchema: Schema<ActiveUsers> = s.object<ActiveUsers>(
  {
    anonymous: s.optional(s.int()),
    loggedIn: s.optional(s.int()),
    _keysMap: {
      loggedIn: "logged_in",
    },
  },
  { additionalProperties: s.json() },
);
