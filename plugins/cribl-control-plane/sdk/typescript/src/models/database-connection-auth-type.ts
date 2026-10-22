import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DatabaseConnectionAuthType = {
  ConfigObj: "configObj",
  ConnectionString: "connectionString",
  Keypair: "keypair",
  Secret: "secret",
  Secrets: "secrets",
} as const;
export type DatabaseConnectionAuthType =
  | (typeof DatabaseConnectionAuthType)[keyof typeof DatabaseConnectionAuthType]
  | (string & {});

export const databaseConnectionAuthTypeSchema: EnumSchema<DatabaseConnectionAuthType> =
  s.enumOf<DatabaseConnectionAuthType>(DatabaseConnectionAuthType);
