using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Summary of a Spark Application stages.
/// </summary>
public record SummarizeSparkApplicationStagesResponse
{
    /// <summary>
    /// Summary of a Spark Application Stages
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stagesSummary")]
    public StagesSummary1? StagesSummary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
