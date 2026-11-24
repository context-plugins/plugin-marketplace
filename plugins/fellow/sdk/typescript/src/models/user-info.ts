import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** User information in API responses. */
export type UserInfo = {
  id: string;
  email: string;
  fullName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userInfoSchema: Schema<UserInfo> = s.object<UserInfo>(
  {
    id: s.string(),
    email: s.string(),
    fullName: s.string(),
    _keysMap: {
      fullName: "full_name",
    },
  },
  { additionalProperties: s.json() },
);
