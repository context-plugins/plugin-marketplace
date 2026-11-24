import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3ContactsTablesColumnsResponse = {
  tableId?: string;
  columnId?: string;
  removed?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3ContactsTablesColumnsResponseSchema: Schema<V3ContactsTablesColumnsResponse> =
  s.object<V3ContactsTablesColumnsResponse>(
    {
      tableId: s.optional(s.string()),
      columnId: s.optional(s.string()),
      removed: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
