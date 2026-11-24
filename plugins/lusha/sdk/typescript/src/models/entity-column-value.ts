import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cellStatusSchema, type CellStatus } from "./cell-status.js";

/**
 * One column's value on a single row, as returned by Get Entities. This shape is a passthrough from
 * the underlying Workspace service — the fields shown here (`id`, `name`, `type`, `sourceType`,
 * `value`, `status`) are representative, not an exhaustive schema.
 */
export type EntityColumnValue = {
  id?: string;
  name?: string;
  type?: string;
  sourceType?: string;
  /** The cell's data. Shape depends on the column type. */
  value?: Record<string, unknown>;
  /**
   * Current state of a single cell's data. `no_data` means the run succeeded but found nothing —
   * distinct from `failed`, which means the run itself errored.
   */
  status?: CellStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityColumnValueSchema: Schema<EntityColumnValue> = s.object<EntityColumnValue>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.string()),
    sourceType: s.optional(s.string()),
    value: s.optional(s.record(s.string(), s.unknown())),
    status: s.optional(s.lazy(() => cellStatusSchema)),
  },
  { additionalProperties: s.json() },
);
