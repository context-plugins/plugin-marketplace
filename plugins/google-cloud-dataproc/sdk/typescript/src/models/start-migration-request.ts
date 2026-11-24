import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { migrationExecution2Schema, type MigrationExecution2 } from "./migration-execution2.js";

/** Request message for DataprocMetastore.StartMigration. */
export type StartMigrationRequest = {
  /**
   * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
   * if it has completed. The server will ignore subsequent requests that provide a duplicate
   * request ID for at least 60 minutes after the first request.For example, if an initial request
   * times out, followed by another request with the same request ID, the server ignores the second
   * request to prevent the creation of duplicate commitments.The request ID must be a valid UUID
   * (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
   * (00000000-0000-0000-0000-000000000000) is not supported.
   */
  requestId?: string;
  /** Required. The configuration details for the migration. */
  migrationExecution?: MigrationExecution2;
  /**
   * Optional. The ID to use for the migration execution, which will become the final component of
   * the migration execution's resource name. If not specified, a UUID will be generated.This value
   * must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or
   * number, and valid characters are a-z0-9-.
   */
  migrationExecutionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMigrationRequestSchema: Schema<StartMigrationRequest> = s.object<StartMigrationRequest>(
  {
    requestId: s.optional(s.string()),
    migrationExecution: s.optional(s.lazy(() => migrationExecution2Schema)),
    migrationExecutionId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
