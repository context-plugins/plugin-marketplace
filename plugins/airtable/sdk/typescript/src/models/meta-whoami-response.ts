import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetaWhoamiResponse = {
  /** The ID of the authenticated user or service account. */
  id?: string;
  /** The list of scopes authorized for this token. */
  scopes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaWhoamiResponseSchema: Schema<MetaWhoamiResponse> = s.object<MetaWhoamiResponse>(
  {
    id: s.optional(s.string()),
    scopes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
