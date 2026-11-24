import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Artifact = {
  /** The artifact path */
  path?: string;
  /** Human-readable artifact path */
  prettyPath?: string;
  /** The node index that produced this artifact */
  nodeIndex?: number;
  /** URL to download the artifact */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const artifactProperties: s.Shape<Artifact> = {
  path: s.optional(s.string()),
  prettyPath: s.optional(s.string()),
  nodeIndex: s.optional(s.int()),
  url: s.optional(s.string()),
  _keysMap: {
    prettyPath: "pretty_path",
    nodeIndex: "node_index",
  },
};

export const artifactInternalSchema: Schema<Artifact> = s.object<Artifact>(artifactProperties, {
  additionalProperties: s.json(),
});

export const artifactSchema: Schema<Artifact> = s.lazySchema(() =>
  s.object<Artifact>(
    {
      ...artifactProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
