import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oauthClientCredentials5Schema, type OauthClientCredentials5 } from "./oauth-client-credentials5.js";
import {
  userPasswordCredentials2Schema,
  type UserPasswordCredentials2,
} from "./user-password-credentials2.js";

/** Profile for connecting to a ServiceNow source. */
export type ServiceNowProfile = {
  /** User-password authentication. */
  userPasswordCredentials?: UserPasswordCredentials2;
  /**
   * Required. The instance of the ServiceNow account. This is the `` part of the URL
   * `https://.service-now.com`.
   */
  instance?: string;
  /** Credentials for authenticating with the ServiceNow API. */
  oauthClientCredentials?: OauthClientCredentials5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceNowProfileSchema: Schema<ServiceNowProfile> = s.object<ServiceNowProfile>(
  {
    userPasswordCredentials: s.optional(s.lazy(() => userPasswordCredentials2Schema)),
    instance: s.optional(s.string()),
    oauthClientCredentials: s.optional(s.lazy(() => oauthClientCredentials5Schema)),
  },
  { additionalProperties: s.json() },
);
