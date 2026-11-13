import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Person = {
  /** Todoist user ID. Omitted for curated creators and deleted accounts. */
  userId?: string;
  /** Display name. */
  name: string;
  /** Creator position. Empty for Todoist users. */
  position: string;
  /** Avatar image URL. Deleted accounts use a placeholder. */
  avatar: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personSchema: Schema<Person> = s.object<Person>(
  {
    userId: s.optional(s.string()),
    name: s.string(),
    position: s.string(),
    avatar: s.string(),
    _keysMap: {
      userId: "user_id",
    },
  },
  { additionalProperties: s.json() },
);
