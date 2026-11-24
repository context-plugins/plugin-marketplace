import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { migrationStatusEqualsSchema, type MigrationStatusEquals } from "./migration-status-equals.js";
import { sortByAttributeSchema, type SortByAttribute } from "./sort-by-attribute.js";
import { sortByOrderSchema, type SortByOrder } from "./sort-by-order.js";

export type GetMigrationsRequest = {
  /**
   * The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the
   * date and time that the migration was started.
   */
  sortByAttribute?: SortByAttribute;
  /** The order so sort the list. */
  sortByOrder?: SortByOrder;
  /**
   * Filters the list to contain only bots whose name contains the specified string. The string is
   * matched anywhere in bot name.
   */
  v1BotNameContains?: string;
  /** Filters the list to contain only migrations in the specified state. */
  migrationStatusEquals?: MigrationStatusEquals;
  /** The maximum number of migrations to return in the response. The default is 10. */
  maxResults?: number;
  /**
   * A pagination token that fetches the next page of migrations. If the response to this operation
   * is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * migrations, specify the pagination token in the request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMigrationsRequestSchema: Schema<GetMigrationsRequest> = s.object<GetMigrationsRequest>(
  {
    sortByAttribute: s.optional(s.lazy(() => sortByAttributeSchema)),
    sortByOrder: s.optional(s.lazy(() => sortByOrderSchema)),
    v1BotNameContains: s.optional(s.string()),
    migrationStatusEquals: s.optional(s.lazy(() => migrationStatusEqualsSchema)),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
