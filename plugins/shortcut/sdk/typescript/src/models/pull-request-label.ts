import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Corresponds to a VCS Label associated with a Pull Request. */
export type PullRequestLabel = {
  /** A string description of this resource. */
  entityType: string;
  /** The unique ID of the VCS Label. */
  id: number;
  /** The color of the VCS label. */
  color: string;
  /** The description of the VCS label. */
  description?: string | null;
  /** The name of the VCS label. */
  name: string;
};

const pullRequestLabelProperties: s.Shape<PullRequestLabel> = {
  entityType: s.string(),
  id: s.int(),
  color: s.string(),
  description: s.optionalNullable(s.string()),
  name: s.string(),
  _keysMap: {
    entityType: "entity_type",
  },
};

export const pullRequestLabelInternalSchema: Schema<PullRequestLabel> =
  s.object<PullRequestLabel>(pullRequestLabelProperties);

export const pullRequestLabelSchema: Schema<PullRequestLabel> = s.lazySchema(() =>
  s.object<PullRequestLabel>({
    ...pullRequestLabelProperties,
    color: s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$")),
  }),
);
