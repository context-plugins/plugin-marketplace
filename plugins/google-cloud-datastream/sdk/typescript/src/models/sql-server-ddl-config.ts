import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DDL configuration for change tables. */
export type SqlServerDdlConfig = {
  /**
   * Optional. If set to true, Datastream will automatically delete the old capture instance after
   * creating a new one to support a DDL change. The default is false and means that the customer
   * has to delete the old capture instance manually.
   */
  autoDeleteOldCaptureInstance?: boolean;
  /**
   * Optional. If set to true, Datastream will automatically create a new capture instance when DDL
   * is detected on a table.The customer will be responsible for deleting it so that the next set of
   * DDLs can be handled. The default is false and it means that DDL's will not be handled .
   */
  autoCreateNewCaptureInstanceOnDdl?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerDdlConfigSchema: Schema<SqlServerDdlConfig> = s.object<SqlServerDdlConfig>(
  {
    autoDeleteOldCaptureInstance: s.optional(s.boolean()),
    autoCreateNewCaptureInstanceOnDdl: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
