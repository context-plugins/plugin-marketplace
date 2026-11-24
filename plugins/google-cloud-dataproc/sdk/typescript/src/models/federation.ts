import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { backendMetastoreSchema, type BackendMetastore } from "./backend-metastore.js";
import { state13Schema, type State13 } from "./state13.js";

/** Represents a federation of multiple backend metastores. */
export type Federation = {
  /**
   * Output only. Additional information about the current state of the metastore federation, if
   * available.
   */
  stateMessage?: string;
  /**
   * Immutable. The Apache Hive metastore version of the federation. All backend metastore versions
   * must be compatible with the federation version.
   */
  version?: string;
  /**
   * Immutable. The relative resource name of the federation, of the form:
   * projects/{project_number}/locations/{location_id}/federations/{federation_id}`.
   */
  name?: string;
  /** Output only. The time when the metastore federation was last updated. */
  updateTime?: string;
  /** Output only. The globally unique resource identifier of the metastore federation. */
  uid?: string;
  /** Output only. The current state of the federation. */
  state?: State13;
  /** User-defined labels for the metastore federation. */
  labels?: Record<string, string>;
  /** Output only. The time when the metastore federation was created. */
  createTime?: string;
  /**
   * Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example:
   * "123/environment": "production", "123/costCenter": "marketing"
   */
  tags?: Record<string, string>;
  /**
   * A map from BackendMetastore rank to BackendMetastores from which the federation service serves
   * metadata at query time. The map key represents the order in which BackendMetastores should be
   * evaluated to resolve database names at query time and should be greater than or equal to zero.
   * A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a
   * higher number.
   */
  backendMetastores?: Record<string, BackendMetastore>;
  /** Output only. The federation endpoint. */
  endpointUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const federationSchema: Schema<Federation> = s.object<Federation>(
  {
    stateMessage: s.optional(s.string()),
    version: s.optional(s.string()),
    name: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    uid: s.optional(s.string()),
    state: s.optional(s.lazy(() => state13Schema)),
    labels: s.optional(s.record(s.string(), s.string())),
    createTime: s.optional(s.string()),
    tags: s.optional(s.record(s.string(), s.string())),
    backendMetastores: s.optional(
      s.record(
        s.string(),
        s.lazy(() => backendMetastoreSchema),
      ),
    ),
    endpointUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
