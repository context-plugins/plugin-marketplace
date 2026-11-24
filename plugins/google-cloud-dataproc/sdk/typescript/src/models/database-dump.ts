import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { databaseType1Schema, type DatabaseType1 } from "./database-type1.js";
import { type1Schema, type Type1 } from "./type1.js";

/**
 * A specification of the location of and metadata about a database dump from a relational database
 * management system.
 */
export type DatabaseDump = {
  /** Optional. The type of the database dump. If unspecified, defaults to MYSQL. */
  type?: Type1;
  /**
   * Optional. A Cloud Storage object or folder URI that specifies the source from which to import
   * metadata. It must begin with gs://.
   */
  gcsUri?: string;
  /**
   * The type of the database.
   *
   * @deprecated
   */
  databaseType?: DatabaseType1;
  /**
   * Optional. The name of the source database.
   *
   * @deprecated
   */
  sourceDatabase?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const databaseDumpSchema: Schema<DatabaseDump> = s.object<DatabaseDump>(
  {
    type: s.optional(s.lazy(() => type1Schema)),
    gcsUri: s.optional(s.string()),
    databaseType: s.optional(s.lazy(() => databaseType1Schema)),
    sourceDatabase: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
