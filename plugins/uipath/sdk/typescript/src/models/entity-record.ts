import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A single entity record. The specific fields available depend on the entity schema configured in
 * the tenant's Data Service. All records include the following system-managed fields.
 */
export type EntityRecord = {
  /** Unique system-assigned identifier of the record */
  id?: string;
  /** ISO 8601 timestamp when the record was created */
  createdOn?: Date;
  /** Identifier of the user or process that created the record */
  createdBy?: string;
  /** ISO 8601 timestamp of the last modification */
  modifiedOn?: Date;
  /** Identifier of the user or process that last modified the record */
  modifiedBy?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecordSchema: Schema<EntityRecord> = s.object<EntityRecord>(
  {
    id: s.optional(s.string()),
    createdOn: s.optional(s.dateTime()),
    createdBy: s.optional(s.string()),
    modifiedOn: s.optional(s.dateTime()),
    modifiedBy: s.optional(s.string()),
    _keysMap: {
      id: "Id",
      createdOn: "CreatedOn",
      createdBy: "CreatedBy",
      modifiedOn: "ModifiedOn",
      modifiedBy: "ModifiedBy",
    },
  },
  { additionalProperties: s.json() },
);
