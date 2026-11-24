using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Summary of tasks for a Spark Application stage attempt.
/// </summary>
public record SummarizeSessionSparkApplicationStageAttemptTasksResponse
{
    /// <summary>
    /// Summary of tasks for a Spark Application Stage Attempt
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stageAttemptTasksSummary")]
    public StageAttemptTasksSummary2? StageAttemptTasksSummary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
