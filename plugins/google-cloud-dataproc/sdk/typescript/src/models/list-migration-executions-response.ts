import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { migrationExecutionSchema, type MigrationExecution } from "./migration-execution.js";

/** Response message for DataprocMetastore.ListMigrationExecutions. */
export type ListMigrationExecutionsResponse = {
  /** Locations that could not be reached. */
  unreachable?: string[];
  /** The migration executions on the specified service. */
  migrationExecutions?: MigrationExecution[];
  /**
   * A token that can be sent as page_token to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMigrationExecutionsResponseSchema: Schema<ListMigrationExecutionsResponse> =
  s.object<ListMigrationExecutionsResponse>(
    {
      unreachable: s.optional(s.array(s.string())),
      migrationExecutions: s.optional(s.array(s.lazy(() => migrationExecutionSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
