import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialTeamApiSchema,
  type ItemBundleSocialTeamApi,
} from "./item-bundle-social-team-api.js";

export type Bio = {
  id: string;
  username: string;
  name: string | null;
  description: string | null;
  avatarUrl: string | null;
  socials: Record<string, string | null> | null;
  teamId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  items: ItemBundleSocialTeamApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bioProperties: s.Shape<Bio> = {
  id: s.string(),
  username: s.string(),
  name: s.nullable(s.string()),
  description: s.nullable(s.string()),
  avatarUrl: s.nullable(s.string()),
  socials: s.nullable(s.record(s.string(), s.nullable(s.string()))),
  teamId: s.string(),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  items: s.array(s.lazy(() => itemBundleSocialTeamApiSchema)),
};

export const bioInternalSchema: Schema<Bio> = s.object<Bio>(bioProperties, {
  additionalProperties: s.json(),
});

export const bioSchema: Schema<Bio> = s.lazySchema(() =>
  s.object<Bio>(
    {
      ...bioProperties,
      socials: s.nullable(s.record(s.string(), s.nullable(s.string().check(s.maxLength(2048), s.url())))),
    },
    { additionalProperties: s.json() },
  ),
);
