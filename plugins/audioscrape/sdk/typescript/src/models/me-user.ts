import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MeUser = {
  email: string;
  id: number;
  /** ISO-8601 UTC timestamp of account creation. */
  memberSince?: string | null;
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meUserSchema: Schema<MeUser> = s.object<MeUser>(
  {
    email: s.string(),
    id: s.int(),
    memberSince: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    _keysMap: {
      memberSince: "member_since",
    },
  },
  { additionalProperties: s.json() },
);
