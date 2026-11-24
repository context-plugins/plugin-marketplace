using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Required. The job resource.
/// </summary>
public record Job2
{
    /// <summary>
    /// Output only. The job status. Additional application-specific status information might be contained in the type_job and yarn_applications fields.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public JobStatus1? Status { get; init; }

    /// <summary>
    /// Optional. Job is a PySpark job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pysparkJob")]
    public PySparkJob2? PysparkJob { get; init; }

    /// <summary>
    /// Optional. Job is a Hive job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hiveJob")]
    public HiveJob1? HiveJob { get; init; }

    /// <summary>
    /// Output only. The previous job status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusHistory")]
    public IReadOnlyList<JobStatus>? StatusHistory { get; init; }

    /// <summary>
    /// Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a job_id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference")]
    public JobReference2? Reference { get; init; }

    /// <summary>
    /// Optional. Job is a Hadoop job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hadoopJob")]
    public HadoopJob1? HadoopJob { get; init; }

    /// <summary>
    /// Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It might be changed before final release.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yarnApplications")]
    public IReadOnlyList<YarnApplication>? YarnApplications { get; init; }

    /// <summary>
    /// Optional. Job is a Pig job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pigJob")]
    public PigJob2? PigJob { get; init; }

    /// <summary>
    /// Optional. Job scheduling configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduling")]
    public JobScheduling1? Scheduling { get; init; }

    /// <summary>
    /// Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Optional. Job is a SparkR job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkRJob")]
    public SparkRJob1? SparkRJob { get; init; }

    /// <summary>
    /// Optional. Job is a Trino job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trinoJob")]
    public TrinoJob2? TrinoJob { get; init; }

    /// <summary>
    /// Output only. A URI pointing to the location of the stdout of the job's driver program.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("driverOutputResourceUri")]
    public string? DriverOutputResourceUri { get; init; }

    /// <summary>
    /// Optional. Driver scheduling configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("driverSchedulingConfig")]
    public DriverSchedulingConfig2? DriverSchedulingConfig { get; init; }

    /// <summary>
    /// Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("done")]
    public bool? Done { get; init; }

    /// <summary>
    /// Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that might be reused over time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobUuid")]
    public string? JobUuid { get; init; }

    /// <summary>
    /// Output only. If present, the location of miscellaneous control files which can be used as part of job setup and handling. If not present, control files might be placed in the same location as driver_output_uri.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("driverControlFilesUri")]
    public string? DriverControlFilesUri { get; init; }

    /// <summary>
    /// Required. Job information, including how, when, and where to run the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("placement")]
    public JobPlacement2? Placement { get; init; }

    /// <summary>
    /// Optional. Job is a SparkSql job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkSqlJob")]
    public SparkSqlJob1? SparkSqlJob { get; init; }

    /// <summary>
    /// Optional. Job is a Spark job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkJob")]
    public SparkJob2? SparkJob { get; init; }

    /// <summary>
    /// Optional. Job is a Presto job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prestoJob")]
    public PrestoJob1? PrestoJob { get; init; }

    /// <summary>
    /// Optional. Job is a Flink job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flinkJob")]
    public FlinkJob2? FlinkJob { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
