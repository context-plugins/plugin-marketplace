import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MeData = {
  /** @default "me" */
  kind?: "me";
  userId?: string;
  /** Remaining balance, or null for unlimited (admin) accounts. */
  credits?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meDataSchema: Schema<MeData> = s.object<MeData>(
  {
    kind: s.defaulted(s.literal("me"), "me"),
    userId: s.optional(s.string()),
    credits: s.optionalNullable(s.int()),
    _keysMap: {
      userId: "user_id",
    },
  },
  { additionalProperties: s.json() },
);
