import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableOwnerInternalSchema, tableOwnerSchema, type TableOwner } from "./table-owner.js";
import { Visibility, visibilitySchema } from "./visibility.js";

export type TableCreateRequest = {
  name: string;
  /** @default Visibility.Private */
  visibility?: Visibility;
  /**
   * Identifies the user acting on the table, and resolves to a user on your account. Required on
   * every table-route call when authenticating with an API key (there is no signed-in user) —
   * omitting it returns `400`. Optional for OAuth/token callers, since the caller is already
   * identified by the token; still accepted if you want to act on behalf of another owner.
   */
  owner: TableOwner;
  /** Optional initial entity IDs to seed the table with. */
  ids?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableCreateRequestProperties: s.Shape<TableCreateRequest> = {
  name: s.string(),
  visibility: s.defaulted(visibilitySchema, Visibility.Private),
  owner: tableOwnerInternalSchema,
  ids: s.optional(s.array(s.string())),
};

export const tableCreateRequestInternalSchema: Schema<TableCreateRequest> = s.object<TableCreateRequest>(
  tableCreateRequestProperties,
  { additionalProperties: s.json() },
);

export const tableCreateRequestSchema: Schema<TableCreateRequest> = s.lazySchema(() =>
  s.object<TableCreateRequest>(
    {
      ...tableCreateRequestProperties,
      owner: tableOwnerSchema,
    },
    { additionalProperties: s.json() },
  ),
);
