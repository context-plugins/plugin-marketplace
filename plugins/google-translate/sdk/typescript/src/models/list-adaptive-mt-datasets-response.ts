import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adaptiveMtDatasetSchema, type AdaptiveMtDataset } from "./adaptive-mt-dataset.js";

/** A list of AdaptiveMtDatasets. */
export type ListAdaptiveMtDatasetsResponse = {
  /** Output only. A list of Adaptive MT datasets. */
  adaptiveMtDatasets?: AdaptiveMtDataset[];
  /**
   * Optional. A token to retrieve a page of results. Pass this value in the
   * [ListAdaptiveMtDatasetsRequest.page_token] field in the subsequent call to
   * `ListAdaptiveMtDatasets` method to retrieve the next page of results.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAdaptiveMtDatasetsResponseSchema: Schema<ListAdaptiveMtDatasetsResponse> =
  s.object<ListAdaptiveMtDatasetsResponse>(
    {
      adaptiveMtDatasets: s.optional(s.array(s.lazy(() => adaptiveMtDatasetSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
