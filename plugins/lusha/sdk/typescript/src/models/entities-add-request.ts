import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableOwnerInternalSchema, tableOwnerSchema, type TableOwner } from "./table-owner.js";

export type EntitiesAddRequest = {
  /**
   * Lusha IDs as strings — `personId` for contacts, `lushaCompanyId` for companies. Accepts either
   * the encrypted token (`v{N}.…`, as returned by Search/Enrich/Get Entities) or the legacy numeric
   * ID. An ID that is neither a valid token nor numeric returns `400`.
   */
  entityIds: string[];
  /**
   * Contacts tables only. One `lushaCompanyId` per contact (encrypted token or numeric),
   * index-aligned with `entityIds`, to help pair company-level enrichment to the right company for
   * each contact. Ignored on companies tables.
   */
  companyIds?: string[];
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

const entitiesAddRequestProperties: s.Shape<EntitiesAddRequest> = {
  entityIds: s.array(s.string()),
  companyIds: s.optional(s.array(s.string())),
  owner: tableOwnerInternalSchema,
};

export const entitiesAddRequestInternalSchema: Schema<EntitiesAddRequest> = s.object<EntitiesAddRequest>(
  entitiesAddRequestProperties,
  { additionalProperties: s.json() },
);

export const entitiesAddRequestSchema: Schema<EntitiesAddRequest> = s.lazySchema(() =>
  s.object<EntitiesAddRequest>(
    {
      ...entitiesAddRequestProperties,
      entityIds: s.array(s.string()).check(s.maxLength(500)),
      owner: tableOwnerSchema,
    },
    { additionalProperties: s.json() },
  ),
);
