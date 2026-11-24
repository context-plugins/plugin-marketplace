import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Encryption settings for encrypting workflow template job arguments. */
export type GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1 = {
  /**
   * Optional. The Cloud KMS key name to use for encrypting workflow template job arguments.When
   * this this key is provided, the following workflow template job arguments
   * (https://cloud.google.com/dataproc/docs/concepts/workflows/use-workflows#adding_jobs_to_a_template),
   * if present, are CMEK encrypted
   * (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_workflow_template_data):
   * FlinkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob
   * args (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args
   * (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args
   * (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args
   * (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob
   * (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and
   * queryList.queries HiveJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob)
   * scriptVariables and queryList.queries PigJob
   * (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and
   * queryList.queries PrestoJob
   * (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and
   * queryList.queries
   */
  kmsKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudDataprocV1WorkflowTemplateEncryptionConfig1Schema: Schema<GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1> =
  s.object<GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1>(
    {
      kmsKey: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
