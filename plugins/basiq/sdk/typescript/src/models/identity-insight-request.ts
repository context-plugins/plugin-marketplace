import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IdentityInsightRequest = {
  /** Full name of the user */
  name?: string;
  /** Phone number of the user */
  phone?: string;
  /** Email address of the user */
  email?: string;
  /** Address of the user */
  address?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identityInsightRequestSchema: Schema<IdentityInsightRequest> = s.object<IdentityInsightRequest>(
  {
    name: s.optional(s.string()),
    phone: s.optional(s.string()),
    email: s.optional(s.string()),
    address: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
