import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Version control system information */
export type VcsInfo = {
  /** The VCS URL */
  vcsUrl?: string;
  /** The VCS provider */
  provider?: string;
  /** The default branch name */
  defaultBranch?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vcsInfoProperties: s.Shape<VcsInfo> = {
  vcsUrl: s.optional(s.string()),
  provider: s.optional(s.string()),
  defaultBranch: s.optional(s.string()),
  _keysMap: {
    vcsUrl: "vcs_url",
    defaultBranch: "default_branch",
  },
};

export const vcsInfoInternalSchema: Schema<VcsInfo> = s.object<VcsInfo>(vcsInfoProperties, {
  additionalProperties: s.json(),
});

export const vcsInfoSchema: Schema<VcsInfo> = s.lazySchema(() =>
  s.object<VcsInfo>(
    {
      ...vcsInfoProperties,
      vcsUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
