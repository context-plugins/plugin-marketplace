import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * ControlPlaneAccess is the request body and response body of UpdateControlPlaneAccess. and the
 * response body of GetControlPlaneAccess. The input identities contains an array of service
 * accounts to grant access to the respective control plane resource, with each service account
 * specified using the following format: `serviceAccount:`***service-account-name***. The
 * ***service-account-name*** is formatted like an email address. For example:
 * `my-control-plane-service_account@my_project_id.iam.gserviceaccount.com` You might specify
 * multiple service accounts, for example, if you have multiple environments and wish to assign a
 * unique service account to each one.
 */
export type GoogleCloudApigeeV1ControlPlaneAccess = {
  /**
   * Identifier. The resource name of the ControlPlaneAccess. Format:
   * "organizations/{org}/controlPlaneAccess"
   */
  name?: string;
  /**
   * Optional. Service accounts granted access to control plane resources for the apigee-watcher
   * component.
   */
  watcherIdentities?: string[];
  /**
   * Optional. Array of service accounts to grant access to control plane resources (for the
   * Synchronizer component). The service accounts must have **Apigee Synchronizer Manager** role.
   * See also [Create service
   * accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts).
   */
  synchronizerIdentities?: string[];
  /**
   * Optional. Array of service accounts authorized to publish analytics data to the control plane
   * (for the Message Processor component).
   */
  analyticsPublisherIdentities?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ControlPlaneAccessSchema: Schema<GoogleCloudApigeeV1ControlPlaneAccess> =
  s.object<GoogleCloudApigeeV1ControlPlaneAccess>(
    {
      name: s.optional(s.string()),
      watcherIdentities: s.optional(s.array(s.string())),
      synchronizerIdentities: s.optional(s.array(s.string())),
      analyticsPublisherIdentities: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
