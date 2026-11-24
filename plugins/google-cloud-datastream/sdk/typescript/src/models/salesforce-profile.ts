import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  oauth2ClientCredentials1Schema,
  type Oauth2ClientCredentials1,
} from "./oauth2-client-credentials1.js";
import { userCredentials2Schema, type UserCredentials2 } from "./user-credentials2.js";

/** Profile for connecting to a Salesforce source. */
export type SalesforceProfile = {
  /** Connected app authentication. */
  oauth2ClientCredentials?: Oauth2ClientCredentials1;
  /**
   * Deprecated: Salesforce is retiring Username-Password authentication. Use
   * `oauth2_client_credentials` instead.
   *
   * @deprecated
   */
  userCredentials?: UserCredentials2;
  /** Required. Domain endpoint for the Salesforce connection. */
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceProfileSchema: Schema<SalesforceProfile> = s.object<SalesforceProfile>(
  {
    oauth2ClientCredentials: s.optional(s.lazy(() => oauth2ClientCredentials1Schema)),
    userCredentials: s.optional(s.lazy(() => userCredentials2Schema)),
    domain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
