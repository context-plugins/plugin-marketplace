import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ContactsTagsSyncRequest = {
  tags: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ContactsTagsSyncRequestProperties: s.Shape<V1ContactsTagsSyncRequest> = {
  tags: s.array(s.string()),
};

export const v1ContactsTagsSyncRequestInternalSchema: Schema<V1ContactsTagsSyncRequest> =
  s.object<V1ContactsTagsSyncRequest>(v1ContactsTagsSyncRequestProperties, {
    additionalProperties: s.json(),
  });

export const v1ContactsTagsSyncRequestSchema: Schema<V1ContactsTagsSyncRequest> = s.lazySchema(() =>
  s.object<V1ContactsTagsSyncRequest>(
    {
      ...v1ContactsTagsSyncRequestProperties,
      tags: s.array(s.string().check(s.maxLength(64))).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
