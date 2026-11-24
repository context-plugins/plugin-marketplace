import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FamilyMemberData = {
  userId?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const familyMemberDataSchema: Schema<FamilyMemberData> = s.object<FamilyMemberData>(
  {
    userId: s.optional(s.string()),
    name: s.optional(s.string()),
    _keysMap: {
      userId: "user_id",
    },
  },
  { additionalProperties: s.json() },
);
