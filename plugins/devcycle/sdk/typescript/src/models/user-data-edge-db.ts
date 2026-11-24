import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserDataEdgeDb = {
  /** Unique id to identify the user */
  userId: string;
  /** User's email used to identify the user on the dashaboard / target audiences */
  email?: string;
  /** User's name used to idenify the user on the dashaboard / target audiences */
  name?: string;
  /** User's language in ISO 639-1 format */
  language?: Record<string, string>;
  /** User's country in ISO 3166 alpha-2 format */
  country?: Record<string, string>;
  /**
   * User's custom data to target the user with, data will be logged to DevCycle for use in
   * dashboard.
   */
  customData?: Record<string, unknown>;
  /** Date the user was last seen being used, Unix epoch timestamp format */
  lastSeenDate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userDataEdgeDbProperties: s.Shape<UserDataEdgeDb> = {
  userId: s.string(),
  email: s.optional(s.string()),
  name: s.optional(s.string()),
  language: s.optional(s.record(s.string(), s.string())),
  country: s.optional(s.record(s.string(), s.string())),
  customData: s.optional(s.record(s.string(), s.unknown())),
  lastSeenDate: s.optional(s.float64()),
  _keysMap: {
    userId: "user_id",
  },
};

export const userDataEdgeDbInternalSchema: Schema<UserDataEdgeDb> = s.object<UserDataEdgeDb>(
  userDataEdgeDbProperties,
  { additionalProperties: s.json() },
);

export const userDataEdgeDbSchema: Schema<UserDataEdgeDb> = s.lazySchema(() =>
  s.object<UserDataEdgeDb>(
    {
      ...userDataEdgeDbProperties,
      language: s.optional(s.record(s.string(), s.string().check(s.maxLength(2)))),
      country: s.optional(s.record(s.string(), s.string().check(s.maxLength(2)))),
    },
    { additionalProperties: s.json() },
  ),
);
