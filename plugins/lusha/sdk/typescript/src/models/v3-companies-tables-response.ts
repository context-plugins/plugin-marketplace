import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3CompaniesTablesResponse = {
  tableId?: string;
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3CompaniesTablesResponseSchema: Schema<V3CompaniesTablesResponse> =
  s.object<V3CompaniesTablesResponse>(
    {
      tableId: s.optional(s.string()),
      status: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
