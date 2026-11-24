import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oauthClientCredentials3Schema, type OauthClientCredentials3 } from "./oauth-client-credentials3.js";

/** Profile for connecting to a Dataverse source. */
export type DataverseProfile = {
  /** Required. Environment URL of the Microsoft Dataverse instance. Example: `.crm.dynamics.com` */
  environmentUrl?: string;
  /** Required. Tenant id of the Microsoft Dataverse instance. */
  tenantId?: string;
  /** Required. Credentials for authenticating with the Dataverse API. */
  oauthClientCredentials?: OauthClientCredentials3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataverseProfileSchema: Schema<DataverseProfile> = s.object<DataverseProfile>(
  {
    environmentUrl: s.optional(s.string()),
    tenantId: s.optional(s.string()),
    oauthClientCredentials: s.optional(s.lazy(() => oauthClientCredentials3Schema)),
  },
  { additionalProperties: s.json() },
);
