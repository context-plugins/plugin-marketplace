import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * What the act is about. An approval covers this artifact and no other: report a different hash
 * when you record execution and it is refused as `approval_invalidated`
 */
export type Artifact = {
  reportId?: string;
  /** A Deliverd report version: the approval binds to exactly this version */
  versionId?: string;
  /** The sha256 of the file you will act on. For a Deliverd version it must match Deliverd's own */
  sha256?: string;
  name?: string;
  mimeType?: string;
  size?: number;
  uri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const artifactProperties: s.Shape<Artifact> = {
  reportId: s.optional(s.string()),
  versionId: s.optional(s.string()),
  sha256: s.optional(s.string()),
  name: s.optional(s.string()),
  mimeType: s.optional(s.string()),
  size: s.optional(s.int()),
  uri: s.optional(s.string()),
};

export const artifactInternalSchema: Schema<Artifact> = s.object<Artifact>(artifactProperties, {
  additionalProperties: s.json(),
});

export const artifactSchema: Schema<Artifact> = s.lazySchema(() =>
  s.object<Artifact>(
    {
      ...artifactProperties,
      sha256: s.optional(s.string().check(s.pattern("^[0-9a-fA-F]{64}$"))),
      name: s.optional(s.string().check(s.maxLength(300))),
      mimeType: s.optional(s.string().check(s.maxLength(100))),
      size: s.optional(s.int().check(s.gte(0))),
      uri: s.optional(s.string().check(s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
