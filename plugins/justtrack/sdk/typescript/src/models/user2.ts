import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type User2 = {
  /**
   * id of the user, that was provided to the justtrack sdk through SetUserId. It is NOT the legacy
   * justtrack user id.
   */
  id?: string;
  /**
   * 36 character uuid of the installation. Does not change across reinstalls as part of
   * retargeting. Can be retrieved from the justtrack sdk by calling getInstallInstanceId.
   */
  installInstanceId?: string;
  /** 36 character uuid of the attribution of the user. */
  attributionId: string;
  /** GAID or IDFA, depending on platform */
  deviceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const user2Properties: s.Shape<User2> = {
  id: s.optional(s.string()),
  installInstanceId: s.optional(s.string()),
  attributionId: s.string(),
  deviceId: s.optional(s.string()),
};

export const user2InternalSchema: Schema<User2> = s.object<User2>(user2Properties, {
  additionalProperties: s.json(),
});

export const user2Schema: Schema<User2> = s.lazySchema(() =>
  s.object<User2>(
    {
      ...user2Properties,
      id: s.optional(s.string().check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
