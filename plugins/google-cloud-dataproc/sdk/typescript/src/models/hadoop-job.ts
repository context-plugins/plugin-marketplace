import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";

/**
 * A Dataproc job for running Apache Hadoop MapReduce
 * (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html)
 * jobs on Apache Hadoop YARN
 * (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
 */
export type HadoopJob = {
  /**
   * The HCFS URI of the jar file containing the main class. Examples:
   * 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar'
   * 'hdfs:/tmp/test-samples/custom-wordcount.jar'
   * 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'
   */
  mainJarFileUri?: string;
  /**
   * Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working
   * directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.
   */
  fileUris?: string[];
  /**
   * The name of the driver's main class. The jar file containing the class must be in the default
   * CLASSPATH or specified in jar_file_uris.
   */
  mainClass?: string;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig1;
  /** Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks. */
  jarFileUris?: string[];
  /**
   * Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and
   * tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.
   */
  archiveUris?: string[];
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or
   * -Dfoo=bar, that can be set as job properties, since a collision might occur that causes an
   * incorrect job submission.
   */
  args?: string[];
  /**
   * Optional. A mapping of property names to values, used to configure Hadoop. Properties that
   * conflict with values set by the Dataproc API might be overwritten. Can include properties set
   * in /etc/hadoop/conf/*-site and classes in user code.
   */
  properties?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hadoopJobSchema: Schema<HadoopJob> = s.object<HadoopJob>(
  {
    mainJarFileUri: s.optional(s.string()),
    fileUris: s.optional(s.array(s.string())),
    mainClass: s.optional(s.string()),
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    jarFileUris: s.optional(s.array(s.string())),
    archiveUris: s.optional(s.array(s.string())),
    args: s.optional(s.array(s.string())),
    properties: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
