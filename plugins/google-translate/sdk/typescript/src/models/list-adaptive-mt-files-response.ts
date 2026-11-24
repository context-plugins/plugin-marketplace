import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adaptiveMtFileSchema, type AdaptiveMtFile } from "./adaptive-mt-file.js";

/** The response for listing all AdaptiveMt files under a given dataset. */
export type ListAdaptiveMtFilesResponse = {
  /**
   * Optional. A token to retrieve a page of results. Pass this value in the
   * ListAdaptiveMtFilesRequest.page_token field in the subsequent call to `ListAdaptiveMtFiles`
   * method to retrieve the next page of results.
   */
  nextPageToken?: string;
  /** Output only. The Adaptive MT files. */
  adaptiveMtFiles?: AdaptiveMtFile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAdaptiveMtFilesResponseSchema: Schema<ListAdaptiveMtFilesResponse> =
  s.object<ListAdaptiveMtFilesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      adaptiveMtFiles: s.optional(s.array(s.lazy(() => adaptiveMtFileSchema))),
    },
    { additionalProperties: s.json() },
  );
