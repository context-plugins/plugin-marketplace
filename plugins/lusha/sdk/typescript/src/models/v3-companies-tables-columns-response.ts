import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3CompaniesTablesColumnsResponse = {
  tableId?: string;
  columnId?: string;
  removed?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3CompaniesTablesColumnsResponseSchema: Schema<V3CompaniesTablesColumnsResponse> =
  s.object<V3CompaniesTablesColumnsResponse>(
    {
      tableId: s.optional(s.string()),
      columnId: s.optional(s.string()),
      removed: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
