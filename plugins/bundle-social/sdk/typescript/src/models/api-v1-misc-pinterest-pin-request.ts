import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscPinterestPinRequest = {
  teamId: string;
  /** The ID of the post in our database */
  postId: string;
  /** The updated title */
  title?: string;
  /** The updated description */
  description?: string;
  /** The updated destination link */
  link?: string;
  /** The updated alt text */
  altText?: string;
  /** The updated note */
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscPinterestPinRequestProperties: s.Shape<ApiV1MiscPinterestPinRequest> = {
  teamId: s.string(),
  postId: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  link: s.optional(s.string()),
  altText: s.optional(s.string()),
  note: s.optional(s.string()),
};

export const apiV1MiscPinterestPinRequestInternalSchema: Schema<ApiV1MiscPinterestPinRequest> =
  s.object<ApiV1MiscPinterestPinRequest>(apiV1MiscPinterestPinRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscPinterestPinRequestSchema: Schema<ApiV1MiscPinterestPinRequest> = s.lazySchema(() =>
  s.object<ApiV1MiscPinterestPinRequest>(
    {
      ...apiV1MiscPinterestPinRequestProperties,
      link: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
