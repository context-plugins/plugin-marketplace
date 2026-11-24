import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { flinkJob2Schema, type FlinkJob2 } from "./flink-job2.js";
import { hadoopJob1Schema, type HadoopJob1 } from "./hadoop-job1.js";
import { hiveJob1Schema, type HiveJob1 } from "./hive-job1.js";
import { jobScheduling1Schema, type JobScheduling1 } from "./job-scheduling1.js";
import { pigJob2Schema, type PigJob2 } from "./pig-job2.js";
import { prestoJob1Schema, type PrestoJob1 } from "./presto-job1.js";
import { pySparkJob2Schema, type PySparkJob2 } from "./py-spark-job2.js";
import { sparkJob2Schema, type SparkJob2 } from "./spark-job2.js";
import { sparkRJob1Schema, type SparkRJob1 } from "./spark-rjob1.js";
import { sparkSqlJob1Schema, type SparkSqlJob1 } from "./spark-sql-job1.js";
import { trinoJob2Schema, type TrinoJob2 } from "./trino-job2.js";

/** A job executed by the workflow. */
export type OrderedJob = {
  /** Optional. Job is a Pig job. */
  pigJob?: PigJob2;
  /** Optional. Job is a Trino job. */
  trinoJob?: TrinoJob2;
  /**
   * Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters
   * long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must
   * be between 1 and 63 characters long, and must conform to the following regular expression:
   * \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job.
   */
  labels?: Record<string, string>;
  /** Optional. Job is a SparkSql job. */
  sparkSqlJob?: SparkSqlJob1;
  /**
   * Optional. The optional list of prerequisite job step_ids. If not specified, the job will start
   * at the beginning of workflow.
   */
  prerequisiteStepIds?: string[];
  /** Optional. Job is a Hive job. */
  hiveJob?: HiveJob1;
  /** Optional. Job is a Presto job. */
  prestoJob?: PrestoJob1;
  /** Optional. Job is a Hadoop job. */
  hadoopJob?: HadoopJob1;
  /**
   * Required. The step id. The id must be unique among all jobs within the template.The step id is
   * used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in
   * prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers
   * (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must
   * consist of between 3 and 50 characters.
   */
  stepId?: string;
  /** Optional. Job is a Flink job. */
  flinkJob?: FlinkJob2;
  /** Optional. Job scheduling configuration. */
  scheduling?: JobScheduling1;
  /** Optional. Job is a Spark job. */
  sparkJob?: SparkJob2;
  /** Optional. Job is a SparkR job. */
  sparkRJob?: SparkRJob1;
  /** Optional. Job is a PySpark job. */
  pysparkJob?: PySparkJob2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderedJobSchema: Schema<OrderedJob> = s.object<OrderedJob>(
  {
    pigJob: s.optional(s.lazy(() => pigJob2Schema)),
    trinoJob: s.optional(s.lazy(() => trinoJob2Schema)),
    labels: s.optional(s.record(s.string(), s.string())),
    sparkSqlJob: s.optional(s.lazy(() => sparkSqlJob1Schema)),
    prerequisiteStepIds: s.optional(s.array(s.string())),
    hiveJob: s.optional(s.lazy(() => hiveJob1Schema)),
    prestoJob: s.optional(s.lazy(() => prestoJob1Schema)),
    hadoopJob: s.optional(s.lazy(() => hadoopJob1Schema)),
    stepId: s.optional(s.string()),
    flinkJob: s.optional(s.lazy(() => flinkJob2Schema)),
    scheduling: s.optional(s.lazy(() => jobScheduling1Schema)),
    sparkJob: s.optional(s.lazy(() => sparkJob2Schema)),
    sparkRJob: s.optional(s.lazy(() => sparkRJob1Schema)),
    pysparkJob: s.optional(s.lazy(() => pySparkJob2Schema)),
  },
  { additionalProperties: s.json() },
);
