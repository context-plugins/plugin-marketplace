import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";
import { tableOwnerInternalSchema, tableOwnerSchema, type TableOwner } from "./table-owner.js";

export type TableListRequest = {
  /**
   * Identifies the user acting on the table, and resolves to a user on your account. Required on
   * every table-route call when authenticating with an API key (there is no signed-in user) —
   * omitting it returns `400`. Optional for OAuth/token callers, since the caller is already
   * identified by the token; still accepted if you want to act on behalf of another owner.
   */
  owner: TableOwner;
  /** @default 0 */
  page?: number;
  /** @default 100 */
  size?: number;
  /** Optional filter — matches tables whose name contains this text. */
  name?: string;
  /** `deleted` is not a filterable status. */
  status?: Status1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableListRequestProperties: s.Shape<TableListRequest> = {
  owner: tableOwnerInternalSchema,
  page: s.defaulted(s.int(), 0),
  size: s.defaulted(s.int(), 100),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1Schema)),
};

export const tableListRequestInternalSchema: Schema<TableListRequest> = s.object<TableListRequest>(
  tableListRequestProperties,
  { additionalProperties: s.json() },
);

export const tableListRequestSchema: Schema<TableListRequest> = s.lazySchema(() =>
  s.object<TableListRequest>(
    {
      ...tableListRequestProperties,
      owner: tableOwnerSchema,
      page: s.defaulted(s.int().check(s.gte(0), s.lte(100)), 0),
    },
    { additionalProperties: s.json() },
  ),
);
