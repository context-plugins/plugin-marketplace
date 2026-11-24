import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableOwnerInternalSchema, tableOwnerSchema, type TableOwner } from "./table-owner.js";

export type EntitiesRemoveRequest = {
  /**
   * Accepts either the encrypted token (`v{N}.…`, as returned by Get Entities) or the legacy
   * numeric ID. Unresolved IDs are echoed back in `invalidIds` in the exact form you sent them.
   */
  entityIds: string[];
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

const entitiesRemoveRequestProperties: s.Shape<EntitiesRemoveRequest> = {
  entityIds: s.array(s.string()),
  owner: tableOwnerInternalSchema,
};

export const entitiesRemoveRequestInternalSchema: Schema<EntitiesRemoveRequest> =
  s.object<EntitiesRemoveRequest>(entitiesRemoveRequestProperties, { additionalProperties: s.json() });

export const entitiesRemoveRequestSchema: Schema<EntitiesRemoveRequest> = s.lazySchema(() =>
  s.object<EntitiesRemoveRequest>(
    {
      ...entitiesRemoveRequestProperties,
      owner: tableOwnerSchema,
    },
    { additionalProperties: s.json() },
  ),
);
