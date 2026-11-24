import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1PlatformPayeesApiSchema, type Type1PlatformPayeesApi } from "./type1-platform-payees-api.js";

/** PayID details for domestic payee. */
export type PayId = {
  /** The name associated with the PayID. */
  name?: string;
  /** The PayID identifier (email, phone, ABN, etc.). */
  identifier?: string;
  /** The type of PayID identifier. */
  type?: Type1PlatformPayeesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payIdSchema: Schema<PayId> = s.object<PayId>(
  {
    name: s.optional(s.string()),
    identifier: s.optional(s.string()),
    type: s.optional(s.lazy(() => type1PlatformPayeesApiSchema)),
  },
  { additionalProperties: s.json() },
);
