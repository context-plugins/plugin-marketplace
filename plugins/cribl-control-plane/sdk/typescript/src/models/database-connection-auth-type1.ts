import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method for the Database Connection. Determines how credentials are provided. */
export const DatabaseConnectionAuthType1 = {
  ConfigObj: "configObj",
  ConnectionString: "connectionString",
  Keypair: "keypair",
  Secret: "secret",
  Secrets: "secrets",
} as const;
export type DatabaseConnectionAuthType1 =
  | (typeof DatabaseConnectionAuthType1)[keyof typeof DatabaseConnectionAuthType1]
  | (string & {});

export const databaseConnectionAuthType1Schema: EnumSchema<DatabaseConnectionAuthType1> =
  s.enumOf<DatabaseConnectionAuthType1>(DatabaseConnectionAuthType1);
