import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oauthClientCredentials2Schema, type OauthClientCredentials2 } from "./oauth-client-credentials2.js";

/** Profile for connecting to a Salesforce Marketing Cloud source. */
export type SalesforceMarketingCloudProfile = {
  /**
   * Required. Input only. Credentials for authenticating with the Salesforce Marketing Cloud API.
   */
  oauthClientCredentials?: OauthClientCredentials2;
  /**
   * Required. Subdomain for the Salesforce Marketing Cloud connection. Example: if your specific
   * endpoint is `https://{your-specific-subdomain}.rest.marketingcloudapis.com/`, the subdomain is
   * `{your-specific-subdomain}`. Must be 1-63 characters, start and end with an alphanumeric
   * character, and contain only lowercase letters, numbers, and hyphens (-).
   */
  subdomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceMarketingCloudProfileSchema: Schema<SalesforceMarketingCloudProfile> =
  s.object<SalesforceMarketingCloudProfile>(
    {
      oauthClientCredentials: s.optional(s.lazy(() => oauthClientCredentials2Schema)),
      subdomain: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
