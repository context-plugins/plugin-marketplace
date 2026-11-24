import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { migrationSummarySchema, type MigrationSummary } from "./migration-summary.js";

export type GetMigrationsResponse = {
  /**
   * An array of summaries for migrations from Amazon Lex V1 to Amazon Lex V2. To see details of the
   * migration, use the migrationId from the summary in a call to the operation.
   */
  migrationSummaries?: MigrationSummary[];
  /**
   * If the response is truncated, it includes a pagination token that you can specify in your next
   * request to fetch the next page of migrations.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMigrationsResponseSchema: Schema<GetMigrationsResponse> = s.object<GetMigrationsResponse>(
  {
    migrationSummaries: s.optional(s.array(s.lazy(() => migrationSummarySchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
