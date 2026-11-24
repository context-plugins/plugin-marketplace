import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { branchesInternalSchema, branchesSchema, type Branches } from "./branches.js";

export type ProjectCircleciProjectApi = {
  /** The VCS URL of the project */
  vcsUrl?: string;
  /** Whether the user follows this project */
  followed?: boolean;
  /** The organization or username */
  username?: string;
  /** The repository name */
  reponame?: string;
  /** Branch information with recent builds */
  branches?: Record<string, Branches>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const projectCircleciProjectApiProperties: s.Shape<ProjectCircleciProjectApi> = {
  vcsUrl: s.optional(s.string()),
  followed: s.optional(s.boolean()),
  username: s.optional(s.string()),
  reponame: s.optional(s.string()),
  branches: s.optional(
    s.record(
      s.string(),
      s.lazy(() => branchesInternalSchema),
    ),
  ),
  _keysMap: {
    vcsUrl: "vcs_url",
  },
};

export const projectCircleciProjectApiInternalSchema: Schema<ProjectCircleciProjectApi> =
  s.object<ProjectCircleciProjectApi>(projectCircleciProjectApiProperties, {
    additionalProperties: s.json(),
  });

export const projectCircleciProjectApiSchema: Schema<ProjectCircleciProjectApi> = s.lazySchema(() =>
  s.object<ProjectCircleciProjectApi>(
    {
      ...projectCircleciProjectApiProperties,
      vcsUrl: s.optional(s.string().check(s.url())),
      branches: s.optional(
        s.record(
          s.string(),
          s.lazy(() => branchesSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
