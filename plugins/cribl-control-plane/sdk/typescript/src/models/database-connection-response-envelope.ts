import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  databaseConnectionConfigSchema,
  type DatabaseConnectionConfig,
} from "./database-connection-config.js";

export type DatabaseConnectionResponseEnvelope = {
  /** Number of Database Connections returned in the response envelope. */
  count: number;
  /** Database Connections returned in the response envelope. */
  items: DatabaseConnectionConfig[];
};

export const databaseConnectionResponseEnvelopeSchema: Schema<DatabaseConnectionResponseEnvelope> =
  s.object<DatabaseConnectionResponseEnvelope>({
    count: s.int(),
    items: s.array(s.lazy(() => databaseConnectionConfigSchema)),
  });
