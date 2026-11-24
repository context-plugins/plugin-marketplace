import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ContactsTagsRemoveRequest = {
  tags: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ContactsTagsRemoveRequestProperties: s.Shape<V1ContactsTagsRemoveRequest> = {
  tags: s.array(s.string()),
};

export const v1ContactsTagsRemoveRequestInternalSchema: Schema<V1ContactsTagsRemoveRequest> =
  s.object<V1ContactsTagsRemoveRequest>(v1ContactsTagsRemoveRequestProperties, {
    additionalProperties: s.json(),
  });

export const v1ContactsTagsRemoveRequestSchema: Schema<V1ContactsTagsRemoveRequest> = s.lazySchema(() =>
  s.object<V1ContactsTagsRemoveRequest>(
    {
      ...v1ContactsTagsRemoveRequestProperties,
      tags: s.array(s.string().check(s.maxLength(64))).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
