import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { parameterValidation1Schema, type ParameterValidation1 } from "./parameter-validation1.js";

/**
 * A configurable parameter that replaces one or more fields in the template. Parameterizable
 * fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in
 * HadoopJob and SparkJob) - Zone (in ClusterSelector)
 */
export type TemplateParameter = {
  /** Optional. Brief description of the parameter. Must not exceed 1024 characters. */
  description?: string;
  /**
   * Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at
   * most one parameter's list of field paths.A field path is similar in syntax to a
   * google.protobuf.FieldMask. For example, a field path that references the zone field of a
   * workflow template's cluster selector would be specified as placement.clusterSelector.zone.Also,
   * field paths can reference fields using the following syntax: Values in maps can be referenced
   * by key: labels'key' placement.clusterSelector.clusterLabels'key'
   * placement.managedCluster.labels'key' placement.clusterSelector.clusterLabels'key'
   * jobs'step-id'.labels'key' Jobs in the jobs list can be referenced by step-id:
   * jobs'step-id'.hadoopJob.mainJarFileUri jobs'step-id'.hiveJob.queryFileUri
   * jobs'step-id'.pySparkJob.mainPythonFileUri jobs'step-id'.hadoopJob.jarFileUris0
   * jobs'step-id'.hadoopJob.archiveUris0 jobs'step-id'.hadoopJob.fileUris0
   * jobs'step-id'.pySparkJob.pythonFileUris0 Items in repeated fields can be referenced by a
   * zero-based index: jobs'step-id'.sparkJob.args0 Other examples:
   * jobs'step-id'.hadoopJob.properties'key' jobs'step-id'.hadoopJob.args0
   * jobs'step-id'.hiveJob.scriptVariables'key' jobs'step-id'.hadoopJob.mainJarFileUri
   * placement.clusterSelector.zoneIt may not be possible to parameterize maps and repeated fields
   * in their entirety since only individual map values and individual items in repeated fields can
   * be referenced. For example, the following field paths are invalid:
   * placement.clusterSelector.clusterLabels jobs'step-id'.sparkJob.args
   */
  fields?: string[];
  /**
   * Required. Parameter name. The parameter name is used as the key, and paired with the parameter
   * value, which are passed to the template when the template is instantiated. The name must
   * contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with
   * a number. The maximum length is 40 characters.
   */
  name?: string;
  /** Optional. Validation rules to be applied to this parameter's value. */
  validation?: ParameterValidation1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const templateParameterSchema: Schema<TemplateParameter> = s.object<TemplateParameter>(
  {
    description: s.optional(s.string()),
    fields: s.optional(s.array(s.string())),
    name: s.optional(s.string()),
    validation: s.optional(s.lazy(() => parameterValidation1Schema)),
  },
  { additionalProperties: s.json() },
);
