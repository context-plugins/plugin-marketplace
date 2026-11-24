using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Stage Attempt for a Stage of a Spark Application
/// </summary>
public record AccessSparkApplicationStageAttemptResponse
{
    /// <summary>
    /// Output only. Data corresponding to a stage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stageData")]
    public StageData1? StageData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
