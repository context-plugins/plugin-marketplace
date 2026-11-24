import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAwsAppSyncOperationsApiSchema,
  type StatusAwsAppSyncOperationsApi,
} from "./status-aws-app-sync-operations-api.js";

export type GetSchemaCreationStatusResponse = {
  /**
   * The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the
   * schema is in the ACTIVE state, you can add data.
   */
  status?: StatusAwsAppSyncOperationsApi;
  /** Detailed information about the status of the schema creation operation. */
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSchemaCreationStatusResponseSchema: Schema<GetSchemaCreationStatusResponse> =
  s.object<GetSchemaCreationStatusResponse>(
    {
      status: s.optional(s.lazy(() => statusAwsAppSyncOperationsApiSchema)),
      details: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
