import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterSchema, type Cluster } from "./cluster.js";

/** The list of all clusters in a project. */
export type ListClustersResponse = {
  /** Output only. The clusters in the project. */
  clusters?: Cluster[];
  /**
   * Output only. This token is included in the response if there are more results to fetch. To
   * fetch additional results, provide this value as the page_token in a subsequent
   * ListClustersRequest.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listClustersResponseSchema: Schema<ListClustersResponse> = s.object<ListClustersResponse>(
  {
    clusters: s.optional(s.array(s.lazy(() => clusterSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
