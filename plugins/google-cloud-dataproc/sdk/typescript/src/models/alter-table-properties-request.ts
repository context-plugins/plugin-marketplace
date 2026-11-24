import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request message for DataprocMetastore.AlterTableProperties. */
export type AlterTablePropertiesRequest = {
  /**
   * Required. The name of the table containing the properties you're altering in the following
   * format.databases/{database_id}/tables/{table_id}
   */
  tableName?: string;
  /**
   * A map that describes the desired values to mutate. If update_mask is empty, the properties will
   * not update. Otherwise, the properties only alters the value whose associated paths exist in the
   * update mask
   */
  properties?: Record<string, string>;
  /**
   * A field mask that specifies the metadata table properties that are overwritten by the update.
   * Fields specified in the update_mask are relative to the resource (not to the full request). A
   * field is overwritten if it is in the mask.For example, given the target properties: properties
   * { a: 1 b: 2 } And an update properties: properties { a: 2 b: 3 c: 4 } then if the field mask
   * is:paths: "properties.b", "properties.c"then the result will be: properties { a: 1 b: 3 c: 4 }
   */
  updateMask?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const alterTablePropertiesRequestSchema: Schema<AlterTablePropertiesRequest> =
  s.object<AlterTablePropertiesRequest>(
    {
      tableName: s.optional(s.string()),
      properties: s.optional(s.record(s.string(), s.string())),
      updateMask: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
