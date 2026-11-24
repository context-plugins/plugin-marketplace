import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Document3 = {
  /** Updated document name */
  name?: string;
  /** Updated identity ID from identities_index, identities_create */
  identityId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const document3Schema: Schema<Document3> = s.object<Document3>(
  {
    name: s.optional(s.string()),
    identityId: s.optional(s.int()),
    _keysMap: {
      identityId: "identity_id",
    },
  },
  { additionalProperties: s.json() },
);
