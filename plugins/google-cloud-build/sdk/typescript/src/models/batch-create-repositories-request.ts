import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createRepositoryRequestSchema, type CreateRepositoryRequest } from "./create-repository-request.js";

/** Message for creating repositoritories in batch. */
export type BatchCreateRepositoriesRequest = {
  /** Required. The request messages specifying the repositories to create. */
  requests?: CreateRepositoryRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchCreateRepositoriesRequestSchema: Schema<BatchCreateRepositoriesRequest> =
  s.object<BatchCreateRepositoriesRequest>(
    {
      requests: s.optional(s.array(s.lazy(() => createRepositoryRequestSchema))),
    },
    { additionalProperties: s.json() },
  );
