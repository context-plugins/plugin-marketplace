import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ArtifactCircleCiRestApiV2JobApi = {
  /** The artifact path */
  path?: string;
  /** The node index that produced this artifact */
  nodeIndex?: number;
  /** URL to download the artifact */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const artifactCircleCiRestApiV2JobApiProperties: s.Shape<ArtifactCircleCiRestApiV2JobApi> = {
  path: s.optional(s.string()),
  nodeIndex: s.optional(s.int()),
  url: s.optional(s.string()),
  _keysMap: {
    nodeIndex: "node_index",
  },
};

export const artifactCircleCiRestApiV2JobApiInternalSchema: Schema<ArtifactCircleCiRestApiV2JobApi> =
  s.object<ArtifactCircleCiRestApiV2JobApi>(artifactCircleCiRestApiV2JobApiProperties, {
    additionalProperties: s.json(),
  });

export const artifactCircleCiRestApiV2JobApiSchema: Schema<ArtifactCircleCiRestApiV2JobApi> = s.lazySchema(
  () =>
    s.object<ArtifactCircleCiRestApiV2JobApi>(
      {
        ...artifactCircleCiRestApiV2JobApiProperties,
        url: s.optional(s.string().check(s.url())),
      },
      { additionalProperties: s.json() },
    ),
);
