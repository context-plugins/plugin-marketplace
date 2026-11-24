import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optionalComponentSchema, type OptionalComponent } from "./optional-component.js";

/** Specifies the selection and config of software inside the cluster. */
export type SoftwareConfig = {
  /** Optional. The set of components to activate on the cluster. */
  optionalComponents?: OptionalComponent[];
  /**
   * Optional. The version of software inside the cluster. It must be one of the supported Image
   * Versions
   * (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported-dataproc-image-versions),
   * such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version
   * (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions).
   * If unspecified, it defaults to the latest Debian version.
   */
  imageVersion?: string;
  /**
   * Optional. The properties to set on daemon config files.Property keys are specified in
   * prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes
   * and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp:
   * distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig:
   * pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster
   * properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
   */
  properties?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const softwareConfigSchema: Schema<SoftwareConfig> = s.object<SoftwareConfig>(
  {
    optionalComponents: s.optional(s.array(s.lazy(() => optionalComponentSchema))),
    imageVersion: s.optional(s.string()),
    properties: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
