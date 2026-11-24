import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ConfigVersion2Schema,
  type GoogleCloudApigeeV1ConfigVersion2,
} from "./google-cloud-apigee-v1-config-version2.js";
import {
  googleCloudApigeeV1ResourceFiles2Schema,
  type GoogleCloudApigeeV1ResourceFiles2,
} from "./google-cloud-apigee-v1-resource-files2.js";

/** The metadata describing a shared flow revision. */
export type GoogleCloudApigeeV1SharedFlowRevision = {
  /** The resource files included in this shared flow revision. */
  resourceFiles?: GoogleCloudApigeeV1ResourceFiles2;
  /** The resource ID of the parent shared flow. */
  name?: string;
  /**
   * The version of the configuration schema to which this shared flow conforms. The only supported
   * value currently is majorVersion 4 and minorVersion 0. This setting may be used in the future to
   * enable evolution of the shared flow format.
   */
  configurationVersion?: GoogleCloudApigeeV1ConfigVersion2;
  /** A Key-Value map of metadata about this shared flow revision. */
  entityMetaDataAsProperties?: Record<string, string>;
  /** Description of the shared flow revision. */
  description?: string;
  /**
   * A list of the resources included in this shared flow revision formatted as "{type}://{name}".
   */
  resources?: string[];
  /** The resource ID of this revision. */
  revision?: string;
  /** The string "Application" */
  type?: string;
  /** A textual description of the shared flow revision. */
  contextInfo?: string;
  /** A list of the shared flow names included in this shared flow revision. */
  sharedFlows?: string[];
  /** The human readable name of this shared flow. */
  displayName?: string;
  /** Time at which this shared flow revision was created, in milliseconds since epoch. */
  createdAt?: string;
  /** A list of policy names included in this shared flow revision. */
  policies?: string[];
  /**
   * Time at which this shared flow revision was most recently modified, in milliseconds since
   * epoch.
   */
  lastModifiedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SharedFlowRevisionSchema: Schema<GoogleCloudApigeeV1SharedFlowRevision> =
  s.object<GoogleCloudApigeeV1SharedFlowRevision>(
    {
      resourceFiles: s.optional(s.lazy(() => googleCloudApigeeV1ResourceFiles2Schema)),
      name: s.optional(s.string()),
      configurationVersion: s.optional(s.lazy(() => googleCloudApigeeV1ConfigVersion2Schema)),
      entityMetaDataAsProperties: s.optional(s.record(s.string(), s.string())),
      description: s.optional(s.string()),
      resources: s.optional(s.array(s.string())),
      revision: s.optional(s.string()),
      type: s.optional(s.string()),
      contextInfo: s.optional(s.string()),
      sharedFlows: s.optional(s.array(s.string())),
      displayName: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      policies: s.optional(s.array(s.string())),
      lastModifiedAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
