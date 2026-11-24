import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userInfoInternalSchema, userInfoSchema, type UserInfo } from "./user-info.js";

export type UserObserverResponse = {
  /** Unique observer identifier. */
  id: string;
  /** Observer type. @default "USER" */
  type?: "USER";
  /** Timestamp when the observer was invited. */
  invitedAt: Date;
  /** Identifier of the user or API key that invited the observer. */
  invitedBy: string;
  /** Information about the user observer. */
  userInfo: UserInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userObserverResponseProperties: s.Shape<UserObserverResponse> = {
  id: s.string(),
  type: s.defaulted(s.literal("USER"), "USER"),
  invitedAt: s.dateTime(),
  invitedBy: s.string(),
  userInfo: userInfoInternalSchema,
  _keysMap: {
    invitedAt: "invited_at",
    invitedBy: "invited_by",
    userInfo: "user_info",
  },
};

export const userObserverResponseInternalSchema: Schema<UserObserverResponse> =
  s.object<UserObserverResponse>(userObserverResponseProperties, { additionalProperties: s.json() });

export const userObserverResponseSchema: Schema<UserObserverResponse> = s.lazySchema(() =>
  s.object<UserObserverResponse>(
    {
      ...userObserverResponseProperties,
      userInfo: userInfoSchema,
    },
    { additionalProperties: s.json() },
  ),
);
