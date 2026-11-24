import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** NEXT ID: 11 */
export type GoogleCloudApigeeV1DeploymentConfig = {
  /**
   * The list of deployment groups in which this proxy should be deployed. Not currently populated
   * for shared flows.
   */
  deploymentGroups?: string[];
  /** Additional key-value metadata for the deployment. */
  attributes?: Record<string, string>;
  /**
   * The service account identity associated with this deployment. If non-empty, will be in the
   * following format: `projects/-/serviceAccounts/{account_email}`
   */
  serviceAccount?: string;
  /**
   * A mapping from basepaths to proxy endpoint names in this proxy. Not populated for shared flows.
   */
  endpoints?: Record<string, string>;
  /** Location of the API proxy bundle as a URI. */
  location?: string;
  /** Unique ID. The ID will only change if the deployment is deleted and recreated. */
  uid?: string;
  /**
   * Name of the API or shared flow revision to be deployed in the following format:
   * `organizations/{org}/apis/{api}/revisions/{rev}` or
   * `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`
   */
  name?: string;
  /** Unique ID of the API proxy revision. */
  proxyUid?: string;
  /** Base path where the application will be hosted. Defaults to "/". */
  basePath?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeploymentConfigSchema: Schema<GoogleCloudApigeeV1DeploymentConfig> =
  s.object<GoogleCloudApigeeV1DeploymentConfig>(
    {
      deploymentGroups: s.optional(s.array(s.string())),
      attributes: s.optional(s.record(s.string(), s.string())),
      serviceAccount: s.optional(s.string()),
      endpoints: s.optional(s.record(s.string(), s.string())),
      location: s.optional(s.string()),
      uid: s.optional(s.string()),
      name: s.optional(s.string()),
      proxyUid: s.optional(s.string()),
      basePath: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
