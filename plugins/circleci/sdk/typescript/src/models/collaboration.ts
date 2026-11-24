import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Collaboration = {
  /** The VCS provider type */
  vcsType?: string;
  /** The name of the organization */
  name?: string;
  /** The URL of the organization avatar */
  avatarUrl?: string;
  /** The organization slug */
  slug?: string;
  /** The unique identifier of the organization */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const collaborationProperties: s.Shape<Collaboration> = {
  vcsType: s.optional(s.string()),
  name: s.optional(s.string()),
  avatarUrl: s.optional(s.string()),
  slug: s.optional(s.string()),
  id: s.optional(s.string()),
  _keysMap: {
    vcsType: "vcs-type",
    avatarUrl: "avatar_url",
  },
};

export const collaborationInternalSchema: Schema<Collaboration> = s.object<Collaboration>(
  collaborationProperties,
  { additionalProperties: s.json() },
);

export const collaborationSchema: Schema<Collaboration> = s.lazySchema(() =>
  s.object<Collaboration>(
    {
      ...collaborationProperties,
      avatarUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
