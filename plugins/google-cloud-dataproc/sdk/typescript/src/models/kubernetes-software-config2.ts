import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The software configuration for this Dataproc cluster running on Kubernetes. */
export type KubernetesSoftwareConfig2 = {
  /**
   * The components that should be installed in this Dataproc cluster. The key must be a string from
   * the KubernetesComponent enumeration. The value is the version of the software to be installed.
   * At least one entry must be specified.
   */
  componentVersion?: Record<string, string>;
  /**
   * The properties to set on daemon config files.Property keys are specified in prefix:property
   * format, for example spark:spark.kubernetes.container.image. The following are supported
   * prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster
   * properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
   */
  properties?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kubernetesSoftwareConfig2Schema: Schema<KubernetesSoftwareConfig2> =
  s.object<KubernetesSoftwareConfig2>(
    {
      componentVersion: s.optional(s.record(s.string(), s.string())),
      properties: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
