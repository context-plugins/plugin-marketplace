import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDeletionRequestInfoSchema, type DataDeletionRequestInfo } from "./data-deletion-request-info.js";

export type DataDeletionRequestResponse = {
  data?: DataDeletionRequestInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataDeletionRequestResponseSchema: Schema<DataDeletionRequestResponse> =
  s.object<DataDeletionRequestResponse>(
    {
      data: s.optional(s.lazy(() => dataDeletionRequestInfoSchema)),
    },
    { additionalProperties: s.json() },
  );
