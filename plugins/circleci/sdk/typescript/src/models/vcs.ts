import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** VCS information for this pipeline */
export type Vcs = {
  /** The VCS provider name */
  providerName?: string;
  /** The origin repository URL */
  originRepositoryUrl?: string;
  /** The target repository URL */
  targetRepositoryUrl?: string;
  /** The VCS revision */
  revision?: string;
  /** The VCS branch */
  branch?: string;
  /** The VCS tag */
  tag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vcsProperties: s.Shape<Vcs> = {
  providerName: s.optional(s.string()),
  originRepositoryUrl: s.optional(s.string()),
  targetRepositoryUrl: s.optional(s.string()),
  revision: s.optional(s.string()),
  branch: s.optional(s.string()),
  tag: s.optional(s.string()),
  _keysMap: {
    providerName: "provider_name",
    originRepositoryUrl: "origin_repository_url",
    targetRepositoryUrl: "target_repository_url",
  },
};

export const vcsInternalSchema: Schema<Vcs> = s.object<Vcs>(vcsProperties, {
  additionalProperties: s.json(),
});

export const vcsSchema: Schema<Vcs> = s.lazySchema(() =>
  s.object<Vcs>(
    {
      ...vcsProperties,
      originRepositoryUrl: s.optional(s.string().check(s.url())),
      targetRepositoryUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
