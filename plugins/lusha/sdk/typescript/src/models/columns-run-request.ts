import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runScopeSchema, type RunScope } from "./run-scope.js";
import { tableOwnerInternalSchema, tableOwnerSchema, type TableOwner } from "./table-owner.js";

export type ColumnsRunRequest = {
  /**
   * Controls which rows a column operation applies to. `all` re-runs every row, including
   * already-processed ones. `missing` only runs rows that don't have a value for this column yet.
   * `specific` requires `entityIds`.
   */
  runScope: RunScope;
  /** Required when `runScope` is `specific`. */
  entityIds?: string[];
  /**
   * Identifies the user acting on the table, and resolves to a user on your account. Required on
   * every table-route call when authenticating with an API key (there is no signed-in user) —
   * omitting it returns `400`. Optional for OAuth/token callers, since the caller is already
   * identified by the token; still accepted if you want to act on behalf of another owner.
   */
  owner: TableOwner;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const columnsRunRequestProperties: s.Shape<ColumnsRunRequest> = {
  runScope: runScopeSchema,
  entityIds: s.optional(s.array(s.string())),
  owner: tableOwnerInternalSchema,
};

export const columnsRunRequestInternalSchema: Schema<ColumnsRunRequest> = s.object<ColumnsRunRequest>(
  columnsRunRequestProperties,
  { additionalProperties: s.json() },
);

export const columnsRunRequestSchema: Schema<ColumnsRunRequest> = s.lazySchema(() =>
  s.object<ColumnsRunRequest>(
    {
      ...columnsRunRequestProperties,
      owner: tableOwnerSchema,
    },
    { additionalProperties: s.json() },
  ),
);
