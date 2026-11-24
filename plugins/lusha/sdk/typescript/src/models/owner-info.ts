import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Resolved owner of the table. `id` is always present; `email` and `name` are resolved best-effort
 * within the API key's account and may be omitted if resolution fails (in which case the object
 * contains only `id`). Replaces the removed top-level `ownerId` field - this is a breaking change
 * from the prior response shape.
 */
export type OwnerInfo = {
  id?: number;
  email?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ownerInfoProperties: s.Shape<OwnerInfo> = {
  id: s.optional(s.int()),
  email: s.optional(s.string()),
  name: s.optional(s.string()),
};

export const ownerInfoInternalSchema: Schema<OwnerInfo> = s.object<OwnerInfo>(ownerInfoProperties, {
  additionalProperties: s.json(),
});

export const ownerInfoSchema: Schema<OwnerInfo> = s.lazySchema(() =>
  s.object<OwnerInfo>(
    {
      ...ownerInfoProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
