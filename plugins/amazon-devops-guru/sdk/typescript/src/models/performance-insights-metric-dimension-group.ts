import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PerformanceInsightsMetricDimensionGroup = {
  /**
   * The name of the dimension group. Its valid values are: db - The name of the database to which
   * the client is connected (only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon
   * RDS MySQL, and MariaDB) db.application - The name of the application that is connected to the
   * database (only Aurora PostgreSQL and RDS PostgreSQL) db.host - The host name of the connected
   * client (all engines) db.session_type - The type of the current session (only Aurora PostgreSQL
   * and RDS PostgreSQL) db.sql - The SQL that is currently executing (all engines) db.sql_tokenized
   * - The SQL digest (all engines) db.
   */
  group?: string;
  /**
   * A list of specific dimensions from a dimension group. If this parameter is not present, then it
   * signifies that all of the dimensions in the group were requested or are present in the
   * response. Valid values for elements in the Dimensions array are: db.application.name - The name
   * of the application that is connected to the database (only Aurora PostgreSQL and RDS
   * PostgreSQL) db.host.id - The host ID of the connected client (all engines) db.host.name - The
   * host name of the connected client (all engines) db.name - The name of the database to which the
   * client is connected (only Aurora PostgreSQL, A
   */
  dimensions?: string[];
  /** The maximum number of items to fetch for this dimension group. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const performanceInsightsMetricDimensionGroupSchema: Schema<PerformanceInsightsMetricDimensionGroup> =
  s.object<PerformanceInsightsMetricDimensionGroup>(
    {
      group: s.optional(s.string()),
      dimensions: s.optional(s.array(s.string())),
      limit: s.optional(s.int()),
      _keysMap: {
        group: "Group",
        dimensions: "Dimensions",
        limit: "Limit",
      },
    },
    { additionalProperties: s.json() },
  );
