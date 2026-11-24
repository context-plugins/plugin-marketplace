import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Source type for the relational database. RDS_HTTP_ENDPOINT: The relational database source type
 * is an Amazon Relational Database Service (Amazon RDS) HTTP endpoint.
 */
export const RelationalDatabaseSourceType = {
  RdsHttpEndpoint: "RDS_HTTP_ENDPOINT",
} as const;
export type RelationalDatabaseSourceType =
  | (typeof RelationalDatabaseSourceType)[keyof typeof RelationalDatabaseSourceType]
  | (string & {});

export const relationalDatabaseSourceTypeSchema: EnumSchema<RelationalDatabaseSourceType> =
  s.enumOf<RelationalDatabaseSourceType>(RelationalDatabaseSourceType);
