import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Actor = {
  /** The login of the actor */
  login?: string;
  /** The avatar URL of the actor */
  avatarUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const actorProperties: s.Shape<Actor> = {
  login: s.optional(s.string()),
  avatarUrl: s.optional(s.string()),
  _keysMap: {
    avatarUrl: "avatar_url",
  },
};

export const actorInternalSchema: Schema<Actor> = s.object<Actor>(actorProperties, {
  additionalProperties: s.json(),
});

export const actorSchema: Schema<Actor> = s.lazySchema(() =>
  s.object<Actor>(
    {
      ...actorProperties,
      avatarUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
