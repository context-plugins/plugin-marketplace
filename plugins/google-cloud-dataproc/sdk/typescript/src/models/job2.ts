import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { driverSchedulingConfig2Schema, type DriverSchedulingConfig2 } from "./driver-scheduling-config2.js";
import { flinkJob2Schema, type FlinkJob2 } from "./flink-job2.js";
import { hadoopJob1Schema, type HadoopJob1 } from "./hadoop-job1.js";
import { hiveJob1Schema, type HiveJob1 } from "./hive-job1.js";
import { jobPlacement2Schema, type JobPlacement2 } from "./job-placement2.js";
import { jobReference2Schema, type JobReference2 } from "./job-reference2.js";
import { jobScheduling1Schema, type JobScheduling1 } from "./job-scheduling1.js";
import { jobStatusSchema, type JobStatus } from "./job-status.js";
import { jobStatus1Schema, type JobStatus1 } from "./job-status1.js";
import { pigJob2Schema, type PigJob2 } from "./pig-job2.js";
import { prestoJob1Schema, type PrestoJob1 } from "./presto-job1.js";
import { pySparkJob2Schema, type PySparkJob2 } from "./py-spark-job2.js";
import { sparkJob2Schema, type SparkJob2 } from "./spark-job2.js";
import { sparkRJob1Schema, type SparkRJob1 } from "./spark-rjob1.js";
import { sparkSqlJob1Schema, type SparkSqlJob1 } from "./spark-sql-job1.js";
import { trinoJob2Schema, type TrinoJob2 } from "./trino-job2.js";
import { yarnApplicationSchema, type YarnApplication } from "./yarn-application.js";

/** Required. The job resource. */
export type Job2 = {
  /**
   * Output only. The job status. Additional application-specific status information might be
   * contained in the type_job and yarn_applications fields.
   */
  status?: JobStatus1;
  /** Optional. Job is a PySpark job. */
  pysparkJob?: PySparkJob2;
  /** Optional. Job is a Hive job. */
  hiveJob?: HiveJob1;
  /** Output only. The previous job status. */
  statusHistory?: JobStatus[];
  /**
   * Optional. The fully qualified reference to the job, which can be used to obtain the equivalent
   * REST path of the job resource. If this property is not specified when a job is created, the
   * server generates a job_id.
   */
  reference?: JobReference2;
  /** Optional. Job is a Hadoop job. */
  hadoopJob?: HadoopJob1;
  /**
   * Output only. The collection of YARN applications spun up by this job.Beta Feature: This report
   * is available for testing purposes only. It might be changed before final release.
   */
  yarnApplications?: YarnApplication[];
  /** Optional. Job is a Pig job. */
  pigJob?: PigJob2;
  /** Optional. Job scheduling configuration. */
  scheduling?: JobScheduling1;
  /**
   * Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters,
   * and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty,
   * but, if present, must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.
   */
  labels?: Record<string, string>;
  /** Optional. Job is a SparkR job. */
  sparkRJob?: SparkRJob1;
  /** Optional. Job is a Trino job. */
  trinoJob?: TrinoJob2;
  /** Output only. A URI pointing to the location of the stdout of the job's driver program. */
  driverOutputResourceUri?: string;
  /** Optional. Driver scheduling configuration. */
  driverSchedulingConfig?: DriverSchedulingConfig2;
  /**
   * Output only. Indicates whether the job is completed. If the value is false, the job is still in
   * progress. If true, the job is completed, and status.state field will indicate if it was
   * successful, failed, or cancelled.
   */
  done?: boolean;
  /**
   * Output only. A UUID that uniquely identifies a job within the project over time. This is in
   * contrast to a user-settable reference.job_id that might be reused over time.
   */
  jobUuid?: string;
  /**
   * Output only. If present, the location of miscellaneous control files which can be used as part
   * of job setup and handling. If not present, control files might be placed in the same location
   * as driver_output_uri.
   */
  driverControlFilesUri?: string;
  /** Required. Job information, including how, when, and where to run the job. */
  placement?: JobPlacement2;
  /** Optional. Job is a SparkSql job. */
  sparkSqlJob?: SparkSqlJob1;
  /** Optional. Job is a Spark job. */
  sparkJob?: SparkJob2;
  /** Optional. Job is a Presto job. */
  prestoJob?: PrestoJob1;
  /** Optional. Job is a Flink job. */
  flinkJob?: FlinkJob2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const job2Schema: Schema<Job2> = s.object<Job2>(
  {
    status: s.optional(s.lazy(() => jobStatus1Schema)),
    pysparkJob: s.optional(s.lazy(() => pySparkJob2Schema)),
    hiveJob: s.optional(s.lazy(() => hiveJob1Schema)),
    statusHistory: s.optional(s.array(s.lazy(() => jobStatusSchema))),
    reference: s.optional(s.lazy(() => jobReference2Schema)),
    hadoopJob: s.optional(s.lazy(() => hadoopJob1Schema)),
    yarnApplications: s.optional(s.array(s.lazy(() => yarnApplicationSchema))),
    pigJob: s.optional(s.lazy(() => pigJob2Schema)),
    scheduling: s.optional(s.lazy(() => jobScheduling1Schema)),
    labels: s.optional(s.record(s.string(), s.string())),
    sparkRJob: s.optional(s.lazy(() => sparkRJob1Schema)),
    trinoJob: s.optional(s.lazy(() => trinoJob2Schema)),
    driverOutputResourceUri: s.optional(s.string()),
    driverSchedulingConfig: s.optional(s.lazy(() => driverSchedulingConfig2Schema)),
    done: s.optional(s.boolean()),
    jobUuid: s.optional(s.string()),
    driverControlFilesUri: s.optional(s.string()),
    placement: s.optional(s.lazy(() => jobPlacement2Schema)),
    sparkSqlJob: s.optional(s.lazy(() => sparkSqlJob1Schema)),
    sparkJob: s.optional(s.lazy(() => sparkJob2Schema)),
    prestoJob: s.optional(s.lazy(() => prestoJob1Schema)),
    flinkJob: s.optional(s.lazy(() => flinkJob2Schema)),
  },
  { additionalProperties: s.json() },
);
