import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityColumnValueSchema, type EntityColumnValue } from "./entity-column-value.js";

/**
 * A single row. `id` is the **encrypted** Lusha ID (`v{N}.…`) — `personId` for contacts,
 * `lushaCompanyId` for companies — in the same format used across V3, so it round-trips directly
 * into Add Entities, Remove Entities, and Enrich. Internal fields (`accountId`, `companyLid`,
 * `lushaCompanyId`, `personId`, `companyDetails`) are not returned. Remaining per-row fields under
 * `columns` are owned by the Workspace service; this shape is representative, not an exhaustive
 * schema.
 */
export type TableEntity = {
  /** Encrypted Lusha ID. */
  id?: string;
  columns?: EntityColumnValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tableEntitySchema: Schema<TableEntity> = s.object<TableEntity>(
  {
    id: s.optional(s.string()),
    columns: s.optional(s.array(s.lazy(() => entityColumnValueSchema))),
  },
  { additionalProperties: s.json() },
);
