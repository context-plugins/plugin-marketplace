import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetMigrationRequest = {
  /**
   * The unique identifier of the migration to view. The migrationID is returned by the operation.
   */
  migrationId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMigrationRequestSchema: Schema<GetMigrationRequest> = s.object<GetMigrationRequest>(
  {
    migrationId: s.string(),
  },
  { additionalProperties: s.json() },
);
