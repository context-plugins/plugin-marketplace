import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Fields to change on a service account, as a JSON Merge Patch document. */
export type UpdateServiceAccountRequest = {
  /**
   * New name, unique among the customer's service accounts. Leading or trailing whitespace returns
   * `400`.
   */
  name?: string;
  /** New free-text description. `null` leaves it unchanged; an explicit empty string clears it. */
  description?: string | null;
  /** Replaces the whole permission list. An unknown name returns `422`. */
  permissions?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateServiceAccountRequestProperties: s.Shape<UpdateServiceAccountRequest> = {
  name: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  permissions: s.optionalNullable(s.array(s.string())),
};

export const updateServiceAccountRequestInternalSchema: Schema<UpdateServiceAccountRequest> =
  s.object<UpdateServiceAccountRequest>(updateServiceAccountRequestProperties, {
    additionalProperties: s.json(),
  });

export const updateServiceAccountRequestSchema: Schema<UpdateServiceAccountRequest> = s.lazySchema(() =>
  s.object<UpdateServiceAccountRequest>(
    {
      ...updateServiceAccountRequestProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
