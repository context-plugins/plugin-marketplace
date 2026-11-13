import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ServiceAccountBody = {
  /** The service account's display name */
  label?: string;
  /** Description of service account's purpose */
  description?: string;
  /** The service account's expiration date */
  expiresAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceAccountBodySchema: Schema<ServiceAccountBody> = s.object<ServiceAccountBody>(
  {
    label: s.optional(s.string()),
    description: s.optional(s.string()),
    expiresAt: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
