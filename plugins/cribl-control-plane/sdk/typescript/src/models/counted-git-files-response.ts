import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitFilesResponseSchema, type GitFilesResponse } from "./git-files-response.js";

export type CountedGitFilesResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: GitFilesResponse[];
};

export const countedGitFilesResponseSchema: Schema<CountedGitFilesResponse> =
  s.object<CountedGitFilesResponse>({
    count: s.int(),
    items: s.array(s.lazy(() => gitFilesResponseSchema)),
  });
