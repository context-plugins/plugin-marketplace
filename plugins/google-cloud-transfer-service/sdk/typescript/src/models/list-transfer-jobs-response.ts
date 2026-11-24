import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transferJobSchema, type TransferJob } from "./transfer-job.js";

/** Response from ListTransferJobs. */
export type ListTransferJobsResponse = {
  /** A list of transfer jobs. */
  transferJobs?: TransferJob[];
  /** The list next page token. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTransferJobsResponseSchema: Schema<ListTransferJobsResponse> =
  s.object<ListTransferJobsResponse>(
    {
      transferJobs: s.optional(s.array(s.lazy(() => transferJobSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
