import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Reaction = {
  senderId: string;
  reaction?: string | null;
  emoji?: string | null;
  reactedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactionSchema: Schema<Reaction> = s.object<Reaction>(
  {
    senderId: s.string(),
    reaction: s.optionalNullable(s.string()),
    emoji: s.optionalNullable(s.string()),
    reactedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
