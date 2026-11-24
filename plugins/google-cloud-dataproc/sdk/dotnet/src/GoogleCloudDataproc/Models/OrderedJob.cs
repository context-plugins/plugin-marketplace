using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A job executed by the workflow.
/// </summary>
public record OrderedJob
{
    /// <summary>
    /// Optional. Job is a Pig job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pigJob")]
    public PigJob2? PigJob { get; init; }

    /// <summary>
    /// Optional. Job is a Trino job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trinoJob")]
    public TrinoJob2? TrinoJob { get; init; }

    /// <summary>
    /// Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Optional. Job is a SparkSql job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkSqlJob")]
    public SparkSqlJob1? SparkSqlJob { get; init; }

    /// <summary>
    /// Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prerequisiteStepIds")]
    public IReadOnlyList<string>? PrerequisiteStepIds { get; init; }

    /// <summary>
    /// Optional. Job is a Hive job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hiveJob")]
    public HiveJob1? HiveJob { get; init; }

    /// <summary>
    /// Optional. Job is a Presto job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prestoJob")]
    public PrestoJob1? PrestoJob { get; init; }

    /// <summary>
    /// Optional. Job is a Hadoop job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hadoopJob")]
    public HadoopJob1? HadoopJob { get; init; }

    /// <summary>
    /// Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stepId")]
    public string? StepId { get; init; }

    /// <summary>
    /// Optional. Job is a Flink job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flinkJob")]
    public FlinkJob2? FlinkJob { get; init; }

    /// <summary>
    /// Optional. Job scheduling configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduling")]
    public JobScheduling1? Scheduling { get; init; }

    /// <summary>
    /// Optional. Job is a Spark job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkJob")]
    public SparkJob2? SparkJob { get; init; }

    /// <summary>
    /// Optional. Job is a SparkR job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkRJob")]
    public SparkRJob1? SparkRJob { get; init; }

    /// <summary>
    /// Optional. Job is a PySpark job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pysparkJob")]
    public PySparkJob2? PysparkJob { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
