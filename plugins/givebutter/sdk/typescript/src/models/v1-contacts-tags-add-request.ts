import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ContactsTagsAddRequest = {
  tags: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ContactsTagsAddRequestProperties: s.Shape<V1ContactsTagsAddRequest> = {
  tags: s.array(s.string()),
};

export const v1ContactsTagsAddRequestInternalSchema: Schema<V1ContactsTagsAddRequest> =
  s.object<V1ContactsTagsAddRequest>(v1ContactsTagsAddRequestProperties, { additionalProperties: s.json() });

export const v1ContactsTagsAddRequestSchema: Schema<V1ContactsTagsAddRequest> = s.lazySchema(() =>
  s.object<V1ContactsTagsAddRequest>(
    {
      ...v1ContactsTagsAddRequestProperties,
      tags: s.array(s.string().check(s.maxLength(64))).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
