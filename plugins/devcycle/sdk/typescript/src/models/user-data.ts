import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sdkTypeSchema, type SdkType } from "./sdk-type.js";

export type UserData = {
  /** Unique id to identify the user */
  userId: string;
  /** User's email used to identify the user on the dashboard / target audiences */
  email?: string;
  /** User's name used to identify the user on the dashboard / target audiences */
  name?: string;
  /** User's language in ISO 639-1 format */
  language?: string;
  /** User's country in ISO 3166 alpha-2 format */
  country?: string;
  /** App Version of the running application */
  appVersion?: string;
  /** App Build number of the running application */
  appBuild?: string;
  /**
   * User's custom data to target the user with, data will be logged to DevCycle for use in
   * dashboard.
   */
  customData?: Record<string, unknown>;
  /**
   * User's custom data to target the user with, data will not be logged to DevCycle only used for
   * feature bucketing.
   */
  privateCustomData?: Record<string, unknown>;
  /** Date the user was created, Unix epoch timestamp format */
  createdDate?: number;
  /** Date the user was created, Unix epoch timestamp format */
  lastSeenDate?: number;
  /** Platform the Client SDK is running on */
  platform?: string;
  /** Version of the platform the Client SDK is running on */
  platformVersion?: string;
  /** User's device model */
  deviceModel?: string;
  /** DevCycle SDK type */
  sdkType?: SdkType;
  /** DevCycle SDK Version */
  sdkVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userDataProperties: s.Shape<UserData> = {
  userId: s.string(),
  email: s.optional(s.string()),
  name: s.optional(s.string()),
  language: s.optional(s.string()),
  country: s.optional(s.string()),
  appVersion: s.optional(s.string()),
  appBuild: s.optional(s.string()),
  customData: s.optional(s.record(s.string(), s.unknown())),
  privateCustomData: s.optional(s.record(s.string(), s.unknown())),
  createdDate: s.optional(s.float64()),
  lastSeenDate: s.optional(s.float64()),
  platform: s.optional(s.string()),
  platformVersion: s.optional(s.string()),
  deviceModel: s.optional(s.string()),
  sdkType: s.optional(s.lazy(() => sdkTypeSchema)),
  sdkVersion: s.optional(s.string()),
  _keysMap: {
    userId: "user_id",
  },
};

export const userDataInternalSchema: Schema<UserData> = s.object<UserData>(userDataProperties, {
  additionalProperties: s.json(),
});

export const userDataSchema: Schema<UserData> = s.lazySchema(() =>
  s.object<UserData>(
    {
      ...userDataProperties,
      language: s.optional(s.string().check(s.maxLength(2))),
      country: s.optional(s.string().check(s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
