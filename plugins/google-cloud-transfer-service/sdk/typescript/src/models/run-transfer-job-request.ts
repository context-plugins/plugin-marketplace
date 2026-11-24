import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request passed to RunTransferJob. */
export type RunTransferJobRequest = {
  /** Required. The ID of the Google Cloud project that owns the transfer job. */
  projectId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runTransferJobRequestSchema: Schema<RunTransferJobRequest> = s.object<RunTransferJobRequest>(
  {
    projectId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
