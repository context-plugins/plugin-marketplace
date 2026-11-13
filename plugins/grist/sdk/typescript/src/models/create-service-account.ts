import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateServiceAccount = {
  /** The service account's display name */
  label?: string;
  /** Description of service account's purpose */
  description?: string;
  /** The service account's expiration date */
  expiresAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createServiceAccountSchema: Schema<CreateServiceAccount> = s.object<CreateServiceAccount>(
  {
    label: s.optional(s.string()),
    description: s.optional(s.string()),
    expiresAt: s.string(),
  },
  { additionalProperties: s.json() },
);
