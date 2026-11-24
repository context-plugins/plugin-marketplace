import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3ContactsTablesResponse = {
  tableId?: string;
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3ContactsTablesResponseSchema: Schema<V3ContactsTablesResponse> =
  s.object<V3ContactsTablesResponse>(
    {
      tableId: s.optional(s.string()),
      status: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
