import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableOwnerInternalSchema, tableOwnerSchema, type TableOwner } from "./table-owner.js";
import { visibilitySchema, type Visibility } from "./visibility.js";

/**
 * `name`, `visibility`, and `archived` are all optional — send any subset; omitted fields stay
 * unchanged. Sending none of them is a no-op. A partial update re-reads the persisted table first,
 * so fields you don't send are never clobbered.
 */
export type TableUpdateRequest = {
  name?: string;
  visibility?: Visibility;
  /**
   * Set `true` to archive the table (hides it from default List Tables results), `false` to restore
   * it.
   */
  archived?: boolean;
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

const tableUpdateRequestProperties: s.Shape<TableUpdateRequest> = {
  name: s.optional(s.string()),
  visibility: s.optional(s.lazy(() => visibilitySchema)),
  archived: s.optional(s.boolean()),
  owner: tableOwnerInternalSchema,
};

export const tableUpdateRequestInternalSchema: Schema<TableUpdateRequest> = s.object<TableUpdateRequest>(
  tableUpdateRequestProperties,
  { additionalProperties: s.json() },
);

export const tableUpdateRequestSchema: Schema<TableUpdateRequest> = s.lazySchema(() =>
  s.object<TableUpdateRequest>(
    {
      ...tableUpdateRequestProperties,
      owner: tableOwnerSchema,
    },
    { additionalProperties: s.json() },
  ),
);
