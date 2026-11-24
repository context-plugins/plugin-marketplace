import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Bot = {
  id: string;
  name: string;
  avatarUrl?: string | null;
  teamId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botSchema: Schema<Bot> = s.object<Bot>(
  {
    id: s.string(),
    name: s.string(),
    avatarUrl: s.optionalNullable(s.string()),
    teamId: s.string(),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
