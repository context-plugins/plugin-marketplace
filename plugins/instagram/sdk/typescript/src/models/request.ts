import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Request = {
  /** True to hide, false to unhide. */
  hide: boolean;
  accessToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestSchema: Schema<Request> = s.object<Request>(
  {
    hide: s.boolean(),
    accessToken: s.string(),
    _keysMap: {
      accessToken: "access_token",
    },
  },
  { additionalProperties: s.json() },
);
