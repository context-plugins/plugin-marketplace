import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  artifactCircleCiRestApiV2JobApiInternalSchema,
  artifactCircleCiRestApiV2JobApiSchema,
  type ArtifactCircleCiRestApiV2JobApi,
} from "./artifact-circle-ci-rest-api-v2-job-api.js";

export type ArtifactList = {
  /** List of artifacts */
  items?: ArtifactCircleCiRestApiV2JobApi[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const artifactListProperties: s.Shape<ArtifactList> = {
  items: s.optional(s.array(s.lazy(() => artifactCircleCiRestApiV2JobApiInternalSchema))),
  nextPageToken: s.optional(s.string()),
  _keysMap: {
    nextPageToken: "next_page_token",
  },
};

export const artifactListInternalSchema: Schema<ArtifactList> = s.object<ArtifactList>(
  artifactListProperties,
  { additionalProperties: s.json() },
);

export const artifactListSchema: Schema<ArtifactList> = s.lazySchema(() =>
  s.object<ArtifactList>(
    {
      ...artifactListProperties,
      items: s.optional(s.array(s.lazy(() => artifactCircleCiRestApiV2JobApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
