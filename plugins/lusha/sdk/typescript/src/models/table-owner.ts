import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Identifies the user acting on the table, and resolves to a user on your account. Required on
 * every table-route call when authenticating with an API key (there is no signed-in user) —
 * omitting it returns `400`. Optional for OAuth/token callers, since the caller is already
 * identified by the token; still accepted if you want to act on behalf of another owner.
 */
export type TableOwner = {
  /** Must resolve to an existing user on the account tied to your API key. */
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableOwnerProperties: s.Shape<TableOwner> = {
  email: s.optional(s.string()),
};

export const tableOwnerInternalSchema: Schema<TableOwner> = s.object<TableOwner>(tableOwnerProperties, {
  additionalProperties: s.json(),
});

export const tableOwnerSchema: Schema<TableOwner> = s.lazySchema(() =>
  s.object<TableOwner>(
    {
      ...tableOwnerProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
