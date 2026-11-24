import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { photoInternalSchema, photoSchema, type Photo } from "./photo.js";

export type UserBaseResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** *Read-only except when same user as requester*. The user’s name. */
  name?: string;
  /** The user's email address. */
  email?: string;
  /**
   * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided
   * are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in
   * JPEG format).
   */
  photo?: Photo | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userBaseResponseProperties: s.Shape<UserBaseResponse> = {
  gid: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  photo: s.optionalNullable(s.lazy(() => photoInternalSchema)),
  _keysMap: {
    resourceType: "resource_type",
  },
};

export const userBaseResponseInternalSchema: Schema<UserBaseResponse> = s.object<UserBaseResponse>(
  userBaseResponseProperties,
  { additionalProperties: s.json() },
);

export const userBaseResponseSchema: Schema<UserBaseResponse> = s.lazySchema(() =>
  s.object<UserBaseResponse>(
    {
      ...userBaseResponseProperties,
      email: s.optional(s.string().check(s.email())),
      photo: s.optionalNullable(s.lazy(() => photoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
