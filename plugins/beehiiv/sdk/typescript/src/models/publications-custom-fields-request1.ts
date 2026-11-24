import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsCustomFieldsRequest1 = {
  display?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsCustomFieldsRequest1Schema: Schema<PublicationsCustomFieldsRequest1> =
  s.object<PublicationsCustomFieldsRequest1>(
    {
      display: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
