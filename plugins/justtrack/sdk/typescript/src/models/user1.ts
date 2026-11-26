import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type User1 = {
  /**
   * id of the user, that was provided to the justtrack sdk through SetUserId. It is NOT the legacy
   * justtrack user id.
   */
  id?: string;
  /**
   * 36 character uuid of the installation. Does not change across reinstalls as part of
   * retargeting. Can be retrieved from the justtrack sdk by calling getInstallInstanceId.
   */
  installInstanceId: string;
  /** 36 character uuid of the attribution of the user. */
  attributionId?: string;
  /** GAID or IDFA, depending on platform */
  deviceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const user1Properties: s.Shape<User1> = {
  id: s.optional(s.string()),
  installInstanceId: s.string(),
  attributionId: s.optional(s.string()),
  deviceId: s.optional(s.string()),
};

export const user1InternalSchema: Schema<User1> = s.object<User1>(user1Properties, {
  additionalProperties: s.json(),
});

export const user1Schema: Schema<User1> = s.lazySchema(() =>
  s.object<User1>(
    {
      ...user1Properties,
      id: s.optional(s.string().check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
