import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonGetByIdsRequest = {
  contactIds?: string[];
  fields?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personGetByIdsRequestSchema: Schema<PersonGetByIdsRequest> = s.object<PersonGetByIdsRequest>(
  {
    contactIds: s.optional(s.array(s.string())),
    fields: s.optional(s.array(s.string())),
    _keysMap: {
      contactIds: "contact_ids",
    },
  },
  { additionalProperties: s.json() },
);
